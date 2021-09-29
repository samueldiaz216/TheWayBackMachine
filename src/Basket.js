import React from 'react';
import './Basket.css'
import BasketProduct from './BasketProduct.js';

function Basket() {
    return (
        <div className="basket">
            <BasketProduct></BasketProduct>
            <BasketProduct></BasketProduct>
            
        </div>
    )
}

export default Basket;