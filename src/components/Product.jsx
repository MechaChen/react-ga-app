import React, { useState } from "react";

const Product = props => {
  const [count, setCount] = useState(0);
  const countMiles = () => {
    setCount(count - 1);
  };
  const countPlus = () => {
    if (count >= 0) {
      setCount(count + 1);
    }
  };
  return (
    <div className="product">
      <h2 className="product__name">{props.name}</h2>
      <span className="product__index">Product {props.index}</span>
      <img className="product__image" src={props.src} />
      <div className="product__counter">
        <button className="product__button product__num" onClick={countMiles}>
          -
        </button>
        <div className="num">{count}</div>
        <button className="product__button product__num" onClick={countPlus}>
          +
        </button>
      </div>
      <div className="product__buttons__wrapper">
        <button className="product__button" onClick={props.handlePurchase}>
          BUY
        </button>
      </div>
    </div>
  );
};

export default Product;
