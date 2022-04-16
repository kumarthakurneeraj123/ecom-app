import React,{useState} from 'react';

export const AuthContext = React.createContext({
    token:'',
    isLogIn:false,
    login:(token)=>{}
});

const ContextProvider = (props)=>{
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;
    const loginHandler = (token)=>{
        
        setToken(token);
        localStorage.setItem('token',token);
    }
    const contextValue ={
        token:token,
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
