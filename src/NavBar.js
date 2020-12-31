import {useContext} from 'react';
import CartContext from './CartContext';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import {total} from './helpers';

const NavBar = () => {
    const {cart} = useContext(CartContext);

    return(
      <nav>
        <NavLink to='/' id='logo'>Shoply</NavLink>
        <span id="total-display">Current Total: {total(cart)}</span>
        <NavLink to='/cart' id='cart'>Cart</NavLink>
      </nav>
    )
}

export default NavBar;