import React from 'react';

const Product = (props) => {

    return (
        <div className="product">
            <h2 className="product__name">{props.name}</h2>
            <span className="product__index">Product {props.index}</span>
            <img className="product__image" src={props.src} />
            <div className="product__buttons__wrapper">
                <button className="product__button" onClick={props.handlePurchase}>BUY</button>
            </div>
        </div>
    );
}

export default Product;