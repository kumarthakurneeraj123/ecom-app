import {Route, Redirect} from 'react-router-dom';
import { useContext } from 'react';


import React from 'react';
import './App.css';

import MainHeader from './components/MainHeader/MainHeader';
import Generics from './components/Generics/Generics';
import CartProvider from './store/CartProvider';
import Footer from './components/Footer/Footer';
import AboutUs from './components/About/AboutUs';
import Home from './components/Home/Home';
import ContactUs from './components/ContactUs/ContactUs';
import ProductDetails from './components/ProductDetails/ProductDetails';
import AuthForm from './components/Auth/AuthForm';
import { AuthContext } from './store/auth-context';


function App() {
  const authCtx = useContext(AuthContext);
  return (
    <React.Fragment >
       <MainHeader />
       {authCtx.isLogIn && <Route path='/Generics'>
       <Generics />
       </Route>}
      {authCtx.isLogIn && <Route path='/AboutUs'>
       <AboutUs />
       </Route>}
      {authCtx.isLogIn && <Route path='/Home'>
       <Home />
       </Route>}
       {authCtx.isLogIn &&<Route path='/ContactUs'>
       <ContactUs />
       </Route>}
      {authCtx.isLogIn && <Route path='/ProductDetails'>
        <ProductDetails />
        </Route>}
       {!authCtx.isLogIn && <Route>
         <AuthForm path='/Auth' />
       </Route>}
        <Footer />
    </React.Fragment>
  );
}

export default App;
