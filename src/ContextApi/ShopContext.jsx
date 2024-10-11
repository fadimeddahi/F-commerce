import React, { createContext, useContext } from 'react'
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0
    }
    return cart

}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = React.useState(getDefaultCart())



    const addToCart = (itemid) => {
        setCartItems((prev) => {
            return { ...prev, [itemid]: prev[itemid] + 1 }
        })
    }
    const removeFromCart = (itemid) => {
        setCartItems((prev) => {
            return { ...prev, [itemid]: prev[itemid] - 1 }
        })
    }
    
    const gettotalAmount = () => {
        
        let TotalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                TotalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return TotalAmount
    }
    const getTotalCartItem = ()=>{
      let totalItem=0 
    for (const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            totalItem+= cartItems[item]
        }
    }
    return totalItem
}

    const contextValue = {getTotalCartItem, all_product, cartItems, addToCart, removeFromCart ,  gettotalAmount }
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider        