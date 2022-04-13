import {Route} from 'react-router-dom';

import React from 'react';
import './App.css';

import MainHeader from './components/MainHeader/MainHeader';
import Generics from './components/Generics/Generics';
import CartProvider from './store/CartProvider';
import Footer from './components/Footer/Footer';
import AboutUs from './components/About/AboutUs';


function App() {
  return (
    <CartProvider defaultValue>
       <MainHeader />
       <Route path='/Generics'>
       <Generics />
       </Route>
       <Route path='/AboutUs'>
       <AboutUs />
       </Route>
       <Footer />
    </CartProvider>
  );
}

export default App;
