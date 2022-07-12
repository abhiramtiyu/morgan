import { useContext } from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { CartContext } from '../../routes/authentication/cart-context';
import "./carticon.style.scss"
const CartIconComponent=()=>{
    const {isCartOpen,setIsCartOpen,cartcount} = useContext(CartContext)
    const toggleDropdown = ()=>{
        setIsCartOpen(!isCartOpen)
    }
    return(
        <div className='cart-icon-container' onClick={toggleDropdown}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartcount}</span>
        </div>
    )
}
export default CartIconComponent;