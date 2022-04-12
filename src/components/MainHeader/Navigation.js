import React,{useState} from 'react';

import classes from './navigation.module.css';
import Cart from '../Cart/Cart';

const Navigation = ()=>{
    const [isCartClicked, setIsCartClicked] = useState(false);
    const cartHandler = ()=>{
        setIsCartClicked(true);
          }
          const hideCartHandler = () =>{
              setIsCartClicked(false);
          }
    return <nav className={classes.nav}>
        <a href='/'>Home</a>
        <a href='/'>Store</a>
        <a href='/'>About</a>
        <button onClick={cartHandler}>Cart <label>0</label></button>
        {isCartClicked && <Cart onClose={hideCartHandler}/>}
        
    </nav>
}
export default Navigation;