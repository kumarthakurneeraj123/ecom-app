import React from 'react';

import classes from './items.module.css';

const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
    
    
const Items = ()=>{

    return (
        <React.Fragment >
            <span>Colors</span>
            <div className={classes.item1}>
        {productsArr.map((item)=><div className={classes.items}>

                <img src={item.imageUrl} alt="" />
                <div>{item.title} ${item.price}</div>

            </div>
        )}
        </div>
        </React.Fragment>
    );
}
export default Items;