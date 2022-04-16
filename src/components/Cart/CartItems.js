import React,{Fragment, useContext} from 'react';
import axios from 'axios';

import classes from './cartItem.module.css';
import CartContext from '../../store/cart-context';
import { AuthContext } from '../../store/auth-context';


const CartItems = (props)=>{
const authCtx = useContext(AuthContext);
    const cartCtx = useContext(CartContext);
    const removeItemFromCartHandler = (id)=>{
        cartCtx.removeItem(id);
    }

    return(
        <Fragment>
            {console.log(cartCtx.items)}
            {console.log(authCtx.email)}
            {
               cartCtx.items.map((item)=><div key = {item.id}>
                  
                    <div className={classes.div}><img src={item.imageUrl} alt='Products Images' />
                    <span className={classes.span}>{item.title}</span>
                      <span className={classes.span}>${item.price}</span>
                    <input step="1" type='number' value={item.amount} />
                    <button onClick={removeItemFromCartHandler.bind(null,item.id)}>Remove</button>
                    {axios.post(`https://crudcrud.com/api/1d53fdad083c47829eb182d65f9c12f8/cart${authCtx.email}`,{
                        imageUrl:item.imageUrl, title:item.title, price:item.price, quantity:item.amount
                    }).then(res=>console.log(res)).catch(err=>console.log(err))}
                    </div>
                </div>)
            } 
        </Fragment>
    );
}
export default CartItems;