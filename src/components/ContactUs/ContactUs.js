import React,{Fragment, useRef} from 'react';

import classes from './ContactUs.module.css';

const ContactUs = ()=>{
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    const submitHandler = (event)=>{
        event.preventDefault();
        const visitor = {
            name:nameRef.current.value,
            email:emailRef.current.value,
            phone:phoneRef.current.value
        }
        addVisitor(visitor);
    }
    async function addVisitor(visitor){
        const response = await fetch('https://ecom-visitors-default-rtdb.firebaseio.com/visitors.json',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(visitor)
        });
        const data = await response.json();
        console.log(data);
    }

    return(
        <Fragment>
            <div className ={classes.generic}>The Generics</div>
            
            <form onSubmit={submitHandler}>
                <label>Name</label>
                <input ref={nameRef} type='text'></input>
                <label>Email</label>
                <input ref={emailRef} type='email'></input>
                <label>Phone</label>
                <input ref={phoneRef} type='tel'></input>
                <button>Submit</button>
            </form>
           

        </Fragment>
    );

}
export default ContactUs;