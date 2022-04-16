import React,{useRef, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = ()=>{
    const history = useHistory();
    const authCtx = useContext(AuthContext);
    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();
    const submitHandler = (event)=>{
        event.preventDefault();
        const enteredEmail = inputEmailRef.current.value;
        const enteredPassword = inputPasswordRef.current.value;
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvp-lriEvfVBNWMSOMTqMXyGfQ-N--SSs',{
            method:'POST',
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res =>{
            if(res.ok){
                return res.json();
            }else{
                return res.json().then( data=>{
                    let errorMessage = 'Authentication failed!';
                    if (data && data.error && data.error.message) {
                      errorMessage = data.error.message;
                    }
        
                    throw new Error(errorMessage);
                } )
            }
            
        }).then(data=>{
            authCtx.login(data.idToken);
            alert("Logged in successfully!");
            console.log(data);
            history.replace('/Generics');
        }).catch(err=>alert(err));
    }

    return(
        <form className={classes} onSubmit={submitHandler}>
            <label >Email</label>
            <input ref={inputEmailRef} type='email' required/>
            <label>Password</label>
            <input ref={inputPasswordRef} type='password' minLength='7' />
            <button>Login</button>
        </form>
    );
}
export default AuthForm;