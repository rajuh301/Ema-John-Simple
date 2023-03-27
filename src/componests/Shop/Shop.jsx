import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
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


                <div>
                   <Card card={card}></Card>

                </div>


            </div>
        </div>
    );
};

export default Shop;