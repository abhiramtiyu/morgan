import React from 'react'
import './checkoutitem.style.scss';
import { CartContext } from '../../routes/authentication/cart-context';
import { useContext } from 'react';

const CheckoutItemComponent = ({items}) => {
    const {imageUrl,name,price,quantity} = items;
    const {clearItemFromCart,addItemToCart,removeItemFromCart} = useContext(CartContext)

    const clearItemHandler =()=>{
        clearItemFromCart(items)
    }
    const addItemHandler=()=>addItemToCart(items);
    const removeItemHandler=()=>removeItemFromCart(items);
  return (

    <div className='checkout-item-container'>
        <div className="image-container">
         <img src={imageUrl} alt={name} className="img"/>  
        </div>
         
                    <span className='name'>{name}</span>
                    <span className="quantity">
                        <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
                        <span className='value'>{quantity}</span>
                        <div className="arrow"  onClick={addItemHandler}>&#10095;</div>
                    </span>
                    <span className="price">{price}</span>
                    <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
    </div>
  )
}
 export default CheckoutItemComponent;