import {useContext, useState} from 'react';
import CartContext from './CartContext';
import data from './data.json';
import {qty, total} from './helpers';
import DiscountForm from './DiscountForm';

const Cart = () => {
    const { cart, discount } = useContext(CartContext);
    const myItems = qty(cart);
    const uniqueItems = new Set(cart);

    const display = [...uniqueItems].map(key => (
        <div id='cart-card'>
            <h3>{data.products[key].name.toUpperCase()}</h3>
            <img src={data.products[key].image_url} id='product-img' alt='product-image'/>
            <h5>Price: {data.products[key].price}</h5>
            <h5>Description: {data.products[key].description}</h5>
            <h3>Qty: {myItems[key]} // Item Total: {(myItems[key] * data.products[key].price).toFixed(2)}</h3>
        </div>
    ));

    return(
        <div id='cart-div'>
            <h2>Current Total: {total(cart) - discount}</h2>
            <DiscountForm/>
            {display}
        </div>  

    )
};

export default Cart;