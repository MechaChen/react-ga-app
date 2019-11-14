import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import Product from "@components/Product";
import Tomb from "@images/tomb.png";
import Potion from "@images/potion.png";
import Axe from "@images/axe.png";
import Ghost from "@images/ghost.png";
import Eye from "@images/eye.png";

const Products = () => {
  const products = [
    {
      name: "tomb",
      src: Tomb
    },
    {
      name: "potion",
      src: Potion
    },
    {
      name: "axe",
      src: Axe
    },
    {
      name: "ghost",
      src: Ghost
    },
    {
      name: "eye",
      src: Eye
    }
  ];

  const handlePurchase = i => {
    console.log("handlePurchase evt fire");
    ReactGA.event({
      category: "Purchase",
      action: `Buy ${i} product`
    });
  };

  return (
    <div className="products">
      <div className="container">
        <h1>Products</h1>
        <div className="products__wrapper">
          {products.map((prod, i) => (
            <Product
              key={i}
              name={prod.name}
              index={i}
              src={prod.src}
              handlePurchase={() => handlePurchase(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
