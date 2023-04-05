import React from 'react';
import './Card.css'


const Card = (props) => {

    // const card = props.card;

    const { card } = props;
    // console.log(card)

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

    for(const product of card){
        product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;

    }

    let taxPrice = total * 2 /100;

    let grandTotal = total + totalShipping + taxPrice;

    

    return (

        <div className='card'>
            <h4  style={{fontSize: '21px'}}>Order summary</h4>
            <p>Select items : {quantity}</p>
            <p>Total Price : $ {total}</p>
            <p>Total Shipping Charge: $ { totalShipping}</p>
            <p>Tax: $ { taxPrice.toFixed(2)}</p>
            <h6 style={{fontSize: '21px'}}>Grand Total : $ { grandTotal.toFixed(2)}</h6>

            {/* <div className='order-button'>
            <button>Clear Card</button>
            <button style={{ backgroundColor: '#FF9900' }}>Review Order</button>
        </div> */}

        </div>


    );
};

export default Card;