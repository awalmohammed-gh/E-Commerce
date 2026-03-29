import { createContext, useContext, useState } from "react"
import { products } from "../assets/all_products"


const ECommerceContext = createContext()
export const ECommerceProvider = ({children}) => {

  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, size) =>{
      setCartItems((prev) =>({
        ...prev,
        [itemId]:{
          ...prev[itemId],
          [size]: (prev[itemId]?.[size] || 0) + 1
        }
      }))
  }

console.log(cartItems);

    const value = {
      products,
      cartItems,
      addToCart
    }
  return (
    <ECommerceContext.Provider value={value}>
      {children}
    </ECommerceContext.Provider>
  )
}

export const useECommerce = () => useContext(ECommerceContext)