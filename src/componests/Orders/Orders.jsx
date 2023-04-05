import React, { useState } from 'react';
import Card from '../Card/Card';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';


const Orders = () => {

    const saveCard = useLoaderData();
    const [card, setCard] = useState(saveCard);

    const handleRemoveFromCard = (id) =>{

        const remaing = card.filter(product => product.id !== id);
        setCard(remaing);
        removeFromDb(id)
     
    }
   

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    card.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveFromCard={handleRemoveFromCard}
                    ></ReviewItem>)
                }
            </div>
            <div className='card-container'>
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Orders;