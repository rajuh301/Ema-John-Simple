import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);

    const [card, setCard] = useState([])


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products)

    const handleAddToCard = (product) => {
        // console.log(product)

        let newCard = [...card, product];
        setCard(newCard)

    }
   
    return (
        <div>
            <div className='shop-container'>



                <div className='product-container'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCard={handleAddToCard}
                        ></Product>)
                    }

                </div>

                <div className='cart-container'>
                    <h2>Order summary</h2>

                    <div className='order-area'>
                        <h4>Select items : {card.length}</h4>

                        <div>

                         

                            <h4>Total Price:{ }</h4>
                            <h4>Total Shipping Charge:{ }</h4>
                            <h4>Tax:{ }</h4>
                        </div>

                    </div>
                    <h2>Grand Total:{ }</h2>

                    <div className='order-button'>
                        <button>Clear Card</button>
                        <button style={{ backgroundColor: '#FF9900' }}>Review Order</button>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Shop;