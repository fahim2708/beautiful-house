import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const furniture of cart) {
        total = total + furniture.price;
    }
    return (
        <div className="cart-container">
            <h3>Furnitures Added: {props.cart.length}</h3>
            <h3>Total Cost: {total}</h3>
            <button>Order Now</button>
        </div>
    );
};

export default Cart;