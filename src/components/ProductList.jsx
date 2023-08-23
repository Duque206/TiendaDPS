import React, {useState} from 'react';

import ProductItem from '../components/ProductItem';
import fifa15 from '../images/fifa15.jpg';
import nba from '../images/nba.jpg';
import lol from '../images/lol.jpg';
import bo2 from '../images/bo2.jpg';
import prf from '../images/prf.jpg';
import legobatman from '../images/legobatman.jpg';
import ssbu from '../images/ssbu.jpg';
import ow from '../images/ow.jpg';
import fornite from '../images/fornite.jpg';
import spmm from '../images/sdmm.jpg'

const ProductList= () => {
    const[products, setProducts] = useState([
        {
            productId: 1,
            productName: 'Fifa 15',
            price: 10,
            imageUrl: fifa15,
        },
        {
            productId: 2,
            productName: 'NBA 2K23',
            price: 60,
            imageUrl: nba,
        },
        {
            productId: 3,
            productName: 'League of Legends',
            price: 0,
            imageUrl: lol,
        },
        {
            productId: 4,
            productName: 'Black Ops 2',
            price: 20,
            imageUrl: bo2,
        },
        {
            productId: 5,
            productName: 'Pokemon Rojo Fuego',
            price: 15,
            imageUrl: prf,
        },
        {
            productId: 6,
            productName: 'Lego Batman The Video Game',
            price: 15,
            imageUrl: legobatman,
        },
        {
            productId: 7,
            productName: 'Super Smash Bros Ultimate',
            price: 70,
            imageUrl: ssbu,
        },
        {
            productId: 8,
            productName: 'OverWatch',
            price: 40,
            imageUrl: ow,
        },
        {
            productId: 9,
            productName: 'Fornite',
            price: 0,
            imageUrl: fornite,
        },
        {
            productId: 10,
            productName: 'SpiderMan Miles Morales',
            price: 50,
            imageUrl: spmm,
        },

    ])

    return(
        <div className="product-list-table">
            {products.map((product) =>(
                <ProductItem
                key={product.productId}
                id={product.productId}
                name={product.productName}
                price={product.price}
                imageUrl={product.imageUrl}
                />
            )
            )}
        </div>
    );
};

export default ProductList;
