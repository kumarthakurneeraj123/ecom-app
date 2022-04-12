import React from 'react';

import classes from './cart.module.css';
import CartItems from './CartItems';

const Cart = (props)=>{
    const closeHandler = () =>{
        props.onClose();
    }
return (
    <div className={classes.cart}>
        <div>
        <button onClick={closeHandler}>X</button>
        </div>
        <div>
        <label>Cart</label>
        </div>
        <div>
        <label>ITEM</label>
        <label>PRICE</label>
        <label>QUANTITY</label>
        </div>
        <CartItems />
        <div>
            Total $ 0
        </div>
        <div>
            <button>PURCHASE</button>
        </div>
    </div>
);
}
export default Cart;