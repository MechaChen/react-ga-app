import React, { useState, useEffect } from 'react';
import Product from '@components/Product';
import Tomb from '@images/tomb.png';
import Potion from '@images/potion.png';
import Axe from '@images/axe.png';
import Ghost from '@images/ghost.png';
import Eye from '@images/eye.png';

const Products = () => {
    const products = [
        {
            name: 'tomb',
            src: Tomb
        },
        {
            name: 'potion',
            src: Potion
        },
        {
            name: 'axe',
            src: Axe
        },
        {
            name: 'ghost',
            src: Ghost
        },
        {
            name: 'eye',
            src: Eye
        }
    ];

    const [prodCount, setProdCount] = useState(products.map(() => 0));

    const addProdCount = (index) => {
        setProdCount(prodCount.map((prod, i) => i === index ? prod + 1 : prod));
    }

    const minusProdCount = (index) => {
        setProdCount(prodCount.map((prod, i) => i === index ? prod - 1 : prod));
    }

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
                            count={prodCount[i]}
                            addProdCount={() => addProdCount(i)}
                            minusProdCount={() => minusProdCount(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;