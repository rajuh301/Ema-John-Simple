import './Product.css'
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;
    // console.log(props)

    const handleAddToCard = props.handleAddToCard;

    return (
        <div className='product'>
            <img src={img ? img : ''} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCard(props.product)} className='button-card'>
                Add to Card
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;