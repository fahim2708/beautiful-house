import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Furniture from '../Furniture/Furniture';
import './Shop.css';

const Shop = () => {
    const [furnitures, setFurnitures] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./furniture.json')
            .then(res => res.json())
            .then(data => setFurnitures(data))
    }, [])
    const handleAddToCart = (furniture) => {
        const newCart = [...cart, furniture];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="furniture-container">
                {
                    furnitures.map(furniture => <Furniture
                        key={furniture.name}
                        furniture={furniture} handleAddToCart={handleAddToCart}></Furniture>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div >
    );
};

export default Shop;