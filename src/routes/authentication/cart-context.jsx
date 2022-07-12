import { createContext, useState,useEffect } from 'react';
const addCartItem=(cartItems,productToAdd)=>{
   //find  if cartitems contains producttoAdd
    const existingCartItem = cartItems.find(
        (cartItem)=> cartItem.id===productToAdd.id
        );
   //if found increase quantity
        if(existingCartItem){
            return cartItems.map((cartItem)=>
            cartItem.id===productToAdd.id ? {...cartItem,quantity:cartItem.quantity+1} : cartItem
            )
        }
   //return new array with modified cartitems/new cart item

    return [...cartItems, {...productToAdd, quantity:1}]
}
const removeCartItem = (cartItems,cartItemToRemove)=>{
    //find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem)=> cartItem.id===cartItemToRemove.id
        );
    //check if quantity is equal to 1, then remove that item from cart
    if(existingCartItem.quantity===1){
        return cartItems.filter((cartitem)=> cartitem.id!==cartItemToRemove.id)
    }

    //return cart item with matching cart item with reduce quantity
    return cartItems.map((cartItem)=>
            cartItem.id===cartItemToRemove.id ? {...cartItem,quantity:cartItem.quantity-1} : cartItem
            )
}
const clearCartItem=(cartItems,clearItemToClear)=>{
    //
    return cartItems.filter((cartitem)=> cartitem.id!==clearItemToClear.id)
}
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem:[],
  addItemToCart:()=>{},
  removeItemFromCart:()=>{},
  clearItemFromCart:()=>{},
  cartCount:0,
  total:0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems,setCartItem] = useState([])
  const [cartcount,setCartCount] = useState(0)
  const [total,setTotal] =useState(0)

  useEffect(() => {
    const newCArtCount = cartItems.reduce((total,cartItem)=> total+cartItem.quantity,0)
    setCartCount(newCArtCount)
  }, [cartItems])
  useEffect(() => {
    const newCartTotal = cartItems.reduce((total,cartItem)=> total+cartItem.price*cartItem.quantity,0)
    setTotal(newCartTotal)
  }, [cartItems])
  

  const addItemToCart=(productToAdd)=>{
    setCartItem(addCartItem(cartItems,productToAdd));
    }
  const removeItemFromCart=(cartItemToRemove)=>{
    setCartItem(removeCartItem(cartItems,cartItemToRemove));
    }
    const clearItemFromCart=(clearItemToClear)=>{
        setCartItem(clearCartItem(cartItems,clearItemToClear));
        }
  const value = { isCartOpen, setIsCartOpen,addItemToCart ,cartItems,cartcount,total,removeItemFromCart,clearItemFromCart};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};