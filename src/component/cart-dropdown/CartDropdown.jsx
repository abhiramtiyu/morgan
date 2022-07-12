import { useContext } from "react";
import "./cartdropdown.scss";
import ButtonComponent from "../button/ButtonComponent";
import CartItemComponent from "../cart-item/CartItemComponent";
import { CartContext } from "../../routes/authentication/cart-context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const {cartItems} =useContext(CartContext)
  const navigate = useNavigate();
  const checkoutHandler = ()=>{
    navigate('./checkout')
  }
  return (
    <div className="cart-dropdown-container"> 
        <div className="cart-items">  
          {
            cartItems.map((cartItem) => (
              <CartItemComponent key={cartItem.id} cartItem={cartItem} />
            ))
          }
         </div>
        <ButtonComponent onClick={checkoutHandler}>Checkout</ButtonComponent>
    </div>
  )
}

export default CartDropdown;