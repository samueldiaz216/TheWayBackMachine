import React from 'react'
import "./BasketProduct.css"

function BasketProduct() {
    return (
        <div className="basket-product">
            <div className="basket-product-left-container">
                <img src="images/redjacketfront.jpg" alt="" className="basket-product-image" />
                <div className="basket-product-info">
                    <h2 className="basket-product-info-name">
                        Red Jacket
                    </h2>
                    <p className="basket-product-info-size">size:</p>
                    <p className="basket-product-info-era">era:</p>
                </div>

            </div>

            <div className="basket-product-right-container">
                <h2 className="basket-product-price">
                    $18
                </h2>
                <button className="remove-from-basket-button">
                    <img src="images/bin.png" alt="" className="remove-from-basket-icon" />
                </button>
                
            </div>

        </div>
    )
}

export default BasketProduct;
