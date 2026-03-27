import { createContext, useContext, useState } from "react"
import { products } from "../assets/all_products"


const ECommerceContext = createContext()
export const ECommerceProvider = ({children}) => {

  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, size) =>{
    
  }

    const value = {
      products
    }
  return (
    <ECommerceContext.Provider value={value}>
      {children}
    </ECommerceContext.Provider>
  )
}

export const useECommerce = () => useContext(ECommerceContext)