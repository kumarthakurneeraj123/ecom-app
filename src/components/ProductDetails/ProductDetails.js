import React,{Component} from 'react';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import classes from './ProductDetails.module.css';
import tshirt1 from '../../assets/tshirt1.jpg';
import tshirt2 from '../../assets/tshirt2.jpg';
import tshirt3 from '../../assets/tshirt3.jpg';
import tshirt4 from '../../assets/tshirt4.jpg';
import tshirt5 from '../../assets/tshirt5.jpg';

const ProductDetails = ()=>{

    const imgHandler =()=>{
        console.log('Image clicked');
    }
    return(
        <div className={classes.man}>
            <section className={classes.section}>
                <div>
            <img onClick={imgHandler} src={tshirt5} alt='tshirt' />
            <img src={tshirt2} alt='tshirt' />
            <img src={tshirt3} alt='tshirt' />
                <img src={tshirt4} alt='tshirt' />
                </div>
                <div className={classes.main}>
                    <TransformWrapper>
                        <TransformComponent>
                <img src={tshirt1} alt='tshirt' />
                </TransformComponent>
                    </TransformWrapper>
                </div>
            </section>
            <section>
                <span className={classes.review}>Reviews</span>
                <div>Superb tshirt I had ever bought!</div>
            </section>
        </div>
    );
}
export default ProductDetails;