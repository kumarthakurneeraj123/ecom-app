import React,{Fragment, useContext} from 'react';

import classes from './cartItem.module.css';
import CartContext from '../../store/cart-context';


const CartItems = (props)=>{

    const cartCtx = useContext(CartContext);
    const removeItemFromCartHandler = (id)=>{
        cartCtx.removeItem(id);
    }

    return(
        <Fragment>
            {console.log(cartCtx.items)}
            {
               cartCtx.items.map((item)=><div key = {item.id}>
                    <div className={classes.div}><img src={item.imageUrl} alt='Products Images' />
                    <span className={classes.span}>{item.title}</span>
                      <span className={classes.span}>${item.price}</span>
                    <input step="1" type='number' value={item.amount} />
                    <button onClick={removeItemFromCartHandler.bind(null,item.id)}>Remove</button>
                    </div>
                </div>)
            } 
        </Fragment>
    );
}
export default CartItems;