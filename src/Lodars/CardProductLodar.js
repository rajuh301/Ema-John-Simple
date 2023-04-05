import { getShoppingCart } from "../utilities/fakedb";

const cardProductsLoader = async() =>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // if card data is in database, You have to use async await.

    const storeCard = getShoppingCart();
    const saveCard = [];
    for(const id in storeCard){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storeCard[id];
            addedProduct.quantity = quantity;
            saveCard.push(addedProduct)
        }
    }


    console.log(storeCard)








    return saveCard

}

export default cardProductsLoader;