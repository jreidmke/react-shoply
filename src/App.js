import './App.css';
import data from './data.json';
import { Link, BrowserRouter } from 'react-router-dom'
import useCart from './hooks';
import NavBar from './NavBar';
import CartContext from './CartContext';
import Routes from './Routes';
import Cart from './Cart';
import { useState } from 'react';

function App() {
  const [cart, addToCart, removeFromCart] = useCart();
  const [discount, setDiscount] = useState(0);
  const [isDiscounted, setIsDiscounted] = useState(false);

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
      <CartContext.Provider value={{cart, discount, setDiscount, isDiscounted, setIsDiscounted}}>
        <BrowserRouter>
          <NavBar/>
          <div className='Body'>
            <br/>
            <br/>
            <br/>
              <div className='ProductsList'>
                {products}
              </div>
              <div className='Cart'>
                <Cart/>
              </div>
            </div>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
