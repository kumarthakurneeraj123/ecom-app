import React,{useContext} from 'react';

import classes from './cart.module.css';
import CartItems from './CartItems';
import CartContext from '../../store/cart-context';

const Cart = (props)=>{
    const cartCtx = useContext(CartContext);

    const closeHandler = () =>{
        props.onClose();
    }
    const purchaseHandler =()=>{
        if(cartCtx.items.length>0){
            alert('Thanks for purchase');
            
           closeHandler();
           

        }
        else{
            alert('You do not have any item in cart! Please add items in cart.')
        }
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
        <label className={classes.label}
        >ITEM</label>
        <label className={classes.label}>PRICE</label>
        <label className={classes.label}>QUANTITY</label>
        </div>
        <CartItems  />
        <div>
            Total ${cartCtx.totalAmount}
        </div>
        <div>
            <button onClick={purchaseHandler}>PURCHASE</button>
        </div>
    </div>
);
}
export default Cart;