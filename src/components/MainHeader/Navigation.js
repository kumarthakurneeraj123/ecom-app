import { NavLink } from 'react-router-dom';

import React,{useState, useContext} from 'react';

import classes from './navigation.module.css';
import Cart from '../Cart/Cart';
import CartContext from '../../store/cart-context';

const Navigation = ()=>{
    const cartCtx = useContext(CartContext);
    const [isCartClicked, setIsCartClicked] = useState(false);
    const cartHandler = ()=>{
        setIsCartClicked(true);
          }
          const hideCartHandler = () =>{
              setIsCartClicked(false);
          }
          let i=0;
          const amount = cartCtx.items.map((item)=>item.amount+i);
          let totalQuantity = 0;
          for(let i=0;i<amount.length; i++)
          {
                totalQuantity = totalQuantity + amount[i];
          }
    return <nav className={classes.nav}>
        <NavLink activeClassName={classes.active}  to='/Home'>Home</NavLink>
        <NavLink activeClassName={classes.active}  to='/Generics'>Store</NavLink>
        <NavLink activeClassName={classes.active}  to='/AboutUs'>About</NavLink>
        <NavLink activeClassName={classes.active} to='/ContactUs'>Contact Us</NavLink>
        <button onClick={cartHandler}>Cart <span>{totalQuantity}</span></button>
        {isCartClicked && <Cart onClose={hideCartHandler}/>}
        
    </nav>
}
export default Navigation;