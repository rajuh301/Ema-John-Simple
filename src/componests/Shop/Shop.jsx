import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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

    useEffect(() => {
        const storedCard = getShoppingCart()
        const saveCard = [];
        // Step 1 get id --------------------------------
        for (const id in storedCard) {

            // Step 2 get the product using id-----------
            const addedProduct = products.find(product => product.id === id)

            if (addedProduct) {
                // Step 3 added quantity
                const quantity = storedCard[id];
                addedProduct.quantity = quantity; 
                // Step add the added product to the save card
                saveCard.push(addedProduct);
            }
            
            console.log(addedProduct)
        }
        // Step 5 set the card
        setCard(saveCard)


    }, [products])

    const handleAddToCard = (product) => {


        let newCard = [...card, product];
        setCard(newCard)
        addToDb(product.id)

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