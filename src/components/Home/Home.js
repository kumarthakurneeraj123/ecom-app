import React from 'react';

import classes from './Home.module.css';

const Home =()=>{
return(
    <React.Fragment>
        <div className={classes.generic}>The Generics<div className={classes.latest}>Get Our Latest Album</div></div>
        
        <div className={classes.tour}>Tours</div>
        <div className={classes.spans}>
        <span>JUL16</span>
        <span>
DETROIT, MI   
</span>
<span>
DTE ENERGY MUSIC THEATRE   
</span>
<span className={classes.span}>
    BUY TICKETS
</span>
</div>
    </React.Fragment>
);
}
export default Home;