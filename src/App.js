import {useState} from 'react';
import './App.css';
import data from './data.json';
import { Link, BrowserRouter } from 'react-router-dom'
import useCart from './hooks';
import NavBar from './NavBar';
import CartContext from './CartContext';

function App() {
  const [cart, addToCart, removeFromCart] = useCart();

  const products = Object.keys(data.products).map(key =>
    <div key={key} className='product-card'>
      <h3>{data.products[key].name.toUpperCase()} // In Cart: {cart.filter(k => k === key).length}</h3>
      <img src={data.products[key].image_url} id='product-img' alt='product-image'/>
      <h5>Price: {data.products[key].price} // Subtotal: {cart.filter(k => k === key).length * data.products[key].price}</h5>
      <button id='remove-cart-btn' onClick={() => removeFromCart(key)}>Remove from cart.</button>
      <button id='add-cart-btn' onClick={() => addToCart(key)}>Add to cart</button>
      <hr/>
    </div>
  )

  return (
    <div className="App">
      <CartContext.Provider value={{cart}}>
        <BrowserRouter>
          <NavBar/>
          <br/>
          <br/>
          <br/>
            {products}
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
