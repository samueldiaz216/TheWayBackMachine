import React from 'react';
import "./Main.css"
import Listings from './Listings';
import Basket from './Basket';

function Main() {
    return (
        <section class="main">
            {/* <Listings></Listings> */}
            <Basket></Basket>
        </section>
    )
}

export default Main
