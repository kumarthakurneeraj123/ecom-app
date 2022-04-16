import React,{useState} from 'react';

export const AuthContext = React.createContext({
    token:'',
    isLogIn:false,
    email:'',
    login:(token,email)=>{}
});

const ContextProvider = (props)=>{
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const [email, setEmail] = useState();
    const userIsLoggedIn = !!token;
    const loginHandler = (token,email)=>{
       setEmail(email);
        setToken(token);
        localStorage.setItem('token',token);
    }
    const contextValue ={
        token:token,
        email:email,
        isLogIn:userIsLoggedIn,
        login:loginHandler
    }
        return(
            <AuthContext.Provider value={contextValue}>
                {props.children}
            </AuthContext.Provider>
        );
    }

    export default ContextProvider;
