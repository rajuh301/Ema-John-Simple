import React, { useState } from 'react';
import Card from '../Card/Card';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';


const Orders = () => {

    const saveCard = useLoaderData();
    const [card, setCard] = useState(saveCard);

    const handleRemoveFromCard = (id) => {

        const remaing = card.filter(product => product.id !== id);
        setCard(remaing);
        removeFromDb(id)

    }

    const handelClearCard = () => {
        setCard([]);
        deleteShoppingCart();

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
                <Card
                    card={card}
                    handelClearCard={handelClearCard}
                >
                    <Link to='/checkout'>
                    <button className='btn-proceed'>Proceed Checkout</button>
                    </Link>
                </Card>
            </div>
        </div>
    );
};

export default Orders;