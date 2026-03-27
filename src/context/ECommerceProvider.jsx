import { createContext, useContext } from "react"
import { products } from "../assets/all_products"


const ECommerceContext = createContext()
export const ECommerceProvider = ({children}) => {

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