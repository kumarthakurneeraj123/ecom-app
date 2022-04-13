import React from 'react';
import './App.css';

import MainHeader from './components/MainHeader/MainHeader';
import Generics from './components/Generics/Generics';
import CartProvider from './store/CartProvider';


function App() {
  return (
    <CartProvider defaultValue>
       <MainHeader />
       <Generics />
    </CartProvider>
  );
}

export default App;
