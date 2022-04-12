import React from 'react';

import classes from './generics.module.css';
import Items from '../Items/Items';
import Footer from '../Footer/Footer';

const Generics = ()=>{

    return (
        <div className={classes.wrapper}>
            <div className={classes.generics}>
            <span>The Generics</span>
            </div>
            <Items />
            <Footer />
        </div>
    );
    
    
}
export default Generics;