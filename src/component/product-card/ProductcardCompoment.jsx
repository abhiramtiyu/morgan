import "./productCardstyle.scss"
import { useContext,useState } from "react";
import { CartContext } from "../../routes/authentication/cart-context";

import ButtonComponent from '../button/ButtonComponent';
const ProductCard=({product})=>{
    const {name,imageUrl,price} = product;
    const {addItemToCart}=useContext(CartContext)
    const addProdcutToCart = ()=>addItemToCart(product)
    return(
        <div className="product-card-container">
            <img alt={name} src={`${imageUrl}`}/>
            <div className="footer">
                <div className="name">
                    {name}
                </div>
                <div className="price">{price}</div>
            </div>
            <ButtonComponent buttonType='inverted' onClick={addProdcutToCart}>Add to card</ButtonComponent>
        </div>
    )
}
export default ProductCard;