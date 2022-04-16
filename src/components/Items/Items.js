import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

import classes from './items.module.css';
import CartContext from '../../store/cart-context';
import CartProvider from '../../store/CartProvider';
import axios from 'axios';


const productsArr = [

    {
    id:'e1',
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
        id:'e2',
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
        id:'e3',
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
        id:'e4',
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
    
    
const Items = (props)=>{
  
    const cartCtx = useContext(CartContext);
    
    const addItemToCartHandler = (item)=>{
       
        cartCtx.addItem({
            id:item.id,
            title:item.title,
            imageUrl:item.imageUrl,
            price:item.price,
            amount:1
        })

    }
    return (

        <React.Fragment >
            <span>Colors</span>
            <div className={classes.item1}>
        {productsArr.map((item)=><div key={item.id} className={classes.items}>
       <div> {item.title}</div>
              <Link to='/ProductDetails'> <img src={item.imageUrl} alt="" /></Link> 
                <div> ${item.price}<button onClick={addItemToCartHandler.bind(null,item)}>Add to Cart</button></div>

            </div>
        )}
        </div>
        </React.Fragment>
    );
}
export default Items;