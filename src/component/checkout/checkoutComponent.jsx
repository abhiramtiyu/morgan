import React from 'react'
import './checkout.style.scss'
import { CartContext } from '../../routes/authentication/cart-context'
import CheckoutItemComponent from '../checkout-item/checkoutItemComponent'
import { useContext } from 'react'

const CheckoutComponent = () => {
    const {cartItems,total} = useContext(CartContext)
  return (
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
            <span>Description</span>
            </div>
            <div className='header-block'>
            <span>Quantity</span>
            </div>
            <div className='header-block'>
            <span>Price</span>
            </div>
            <div className='header-block'>
            <span>Remove</span>
            </div>
        </div>
        {cartItems.map((items)=>{
            return(
                <CheckoutItemComponent key={items.id} items={items}>
                    {/* <img src={imageUrl} alt={name} />
                    <div>{name} {quantity}</div>
                    <span onClick={()=>addItemToCart(items)}>increment</span>
                    <span onClick={()=>removeItemFromCart(items)}>decrement</span>
                    <div>{price}</div> */}

                </CheckoutItemComponent>
            )
        })}
        <span className='total'>Total: {total}</span>
    </div>
  )
}
export default CheckoutComponent;
