import React from 'react';

import classes from './generics.module.css';
import Items from '../Items/Items';


const Generics = ()=>{

    return (
        <div className={classes.wrapper}>
            <div className={classes.generics}>
            <span>The Generics</span>
            </div>
            <Items />
        </div>
    );
    
    
}
export default Generics;