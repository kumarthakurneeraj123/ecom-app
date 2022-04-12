import React,{Fragment} from 'react';

const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
const CartItems = (props)=>{

    return(
        <Fragment>
            {
                cartElements.map((item)=><div>
                    <div><img src={item.imageUrl} alt='Products Images' />
                    {item.title}
                    {item.price}
                    <input type='number' value={item.quantity}/>
                    <button>Remove</button>
                    </div>
                </div>)
            } 
        </Fragment>
    );
}
export default CartItems;