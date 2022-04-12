import React from 'react';

import classes from './navigation.module.css';

const Navigation = ()=>{

    return <nav className={classes.nav}>
        <a href='/'>Home</a>
        <a href='/'>Store</a>
        <a href='/'>About</a>
        <button>Cart <label>0</label></button>
        
    </nav>
}
export default Navigation;