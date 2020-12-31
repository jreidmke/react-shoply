import {useState} from 'react';

function useCart() {
    const [cart, setCart] = useState([]);

    function addToCart(key) {
        setCart(cart => ([
            ...cart,
            key
        ]));
    };

    function removeFromCart(key) {
        const itemIdx = cart.indexOf(key);
        if(itemIdx === -1) return;
        cart.splice(itemIdx, 1);
        setCart([...cart]);
    };

    return [cart, addToCart, removeFromCart]
}



export default useCart;