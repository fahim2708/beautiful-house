import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Furniture.css';

const Furniture = (props) => {
    const { name, color, size, price, img } = props.furniture;
    return (
        <div className="furniture">
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Color: {color}</p>
            <p>Size: {size}</p>
            <p>Price: {price}</p>
            <button onClick={() => props.handleAddToCart(props.furniture)}><FontAwesomeIcon icon={faPlus} />  Add To List</button>
        </div>
    );
};

export default Furniture;