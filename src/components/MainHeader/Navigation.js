import { NavLink } from 'react-router-dom';


import React,{useState, useContext} from 'react';

import classes from './navigation.module.css';
import Cart from '../Cart/Cart';
import CartContext from '../../store/cart-context';
import { AuthContext } from '../../store/auth-context';

const Navigation = ()=>{
    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);
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
        {authCtx.isLogIn && <NavLink activeClassName={classes.active}  to='/Home'>Home</NavLink>}
        {authCtx.isLogIn && <NavLink activeClassName={classes.active}  to='/Generics'>Store</NavLink>}
        {authCtx.isLogIn && <NavLink activeClassName={classes.active}  to='/AboutUs'>About</NavLink>}
        {authCtx.isLogIn && <NavLink activeClassName={classes.active} to='/ContactUs'>Contact Us</NavLink>}
        {!authCtx.isLogIn && <NavLink activeClassName={classes.active} to='/Auth'>Login</NavLink>}
        {authCtx.isLogIn && <button onClick={cartHandler}>Cart <span>{totalQuantity}</span></button>}
        {authCtx.isLogIn && isCartClicked && <Cart onClose={hideCartHandler}/>}
        
    </nav>
}
export default Navigation;