import React from 'react';
import './Card.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const Card = ({card, handelClearCard, children}) => {


    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of card) {
        product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;

    }

    let taxPrice = total * 2 / 100;

    let grandTotal = total + totalShipping + taxPrice;



    return (

        <div className='card'>
            <h4 style={{ fontSize: '21px' }}>Order summary</h4>
            <p>Select items : {quantity}</p>
            <p>Total Price : $ {total}</p>
            <p>Total Shipping Charge: $ {totalShipping}</p>
            <p>Tax: $ {taxPrice.toFixed(2)}</p>
            <h6 style={{ fontSize: '21px' }}>Grand Total : $ {grandTotal.toFixed(2)}</h6>

            <button onClick={handelClearCard} className='btn-clear-card'>
                <span>
                    Clear Card
                </span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>


    );
};

export default Card;