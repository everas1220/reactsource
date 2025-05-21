import React from 'react';
import ProductCard from './ProductCard';


const Product2 = () => {

    const product = {
        name: "Laptop",
        price: 123.4567,
    };

    return (
        <>
            <ProductCard name={product.name}
                price={product.price}
                formatPrice={(p) => `${p.toFixed(2)}`}
            />
        </>
    );
};

export default Product2;