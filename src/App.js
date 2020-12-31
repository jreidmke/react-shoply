import {useState} from 'react';
import './App.css';
import data from './data.json';
import { Link } from 'react-router-dom'
import useCart from './hooks';

function App() {
  const [cart, addToCart, removeFromCart] = useCart();

  const products = Object.keys(data.products).map(key =>
    <div key={key} className='product-card'>
      <h1>{data.products[key].name.toUpperCase()} // In Cart: 0</h1>
      <img src={data.products[key].image_url} id='product-img' alt='product-image'/>
      <h3>Price: {data.products[key].price}</h3>
      <button id='add-cart-btn' onClick={() => addToCart(data.products[key].name)}>Add to cart</button>
      <button id='remove-cart-btn' onClick={() => removeFromCart(data.products[key].name)}>Remove from cart.</button>
      <hr/>
    </div>
  )

  function printCart() {
    console.log(cart);
  }

  return (
    <div className="App">
      {products}
      <button onClick={printCart}>X</button>
    </div>
  );
}

export default App;
