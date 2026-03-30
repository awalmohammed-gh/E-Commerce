import { createContext, useContext, useMemo, useState } from "react"
import { products } from "../assets/all_products"
import toast from "react-hot-toast";


const ECommerceContext = createContext()
export const ECommerceProvider = ({children}) => {

  const [cartItems, setCartItems] = useState({});
  const [addWishlist, setAddWishlist] = useState([])


  //function to items to cart
  const addToCart = (itemId, size) =>{
    if(!size){
      toast.error("Please product size");
      return;
    }
      setCartItems((prev) =>({
        ...prev,
        [itemId]:{
          ...prev[itemId],
          [size]: (prev[itemId]?.[size] || 0) + 1
        }
      }))
  }


  //function to reduce items from cart
  const removeItemFromCart = (itemId,size) =>{
     //check if item and size can be found,
    setCartItems((prev) =>{
       if(!prev[itemId]?.[size] ){
         return {...prev}
     }

     const update = {
       ...prev[itemId],
       [size]:prev[itemId]?.[size] - 1
     }

     if(update[size] <= 0){
      delete prev[size]
     }

     return{
      ...prev,
      [itemId]:update
     }
    })
  }

  //function to count cart
  const cartCount = useMemo(() =>{
     return Object.values(cartItems).reduce((total,item) =>{
        return total + Object.values(item).reduce((sum,qty) => sum + qty, 0)
     },0)
  },[cartItems])

  const addToWishlist = (id) => {
  setAddWishlist((prev) => {
    if (prev.includes(id)) return prev; // avoid duplicates
    return [...prev, id];
  });
};


const removeFromWishlist = (id) =>{
  if(window.confirm("Are you sure yu want remove product from wishlist")){
    setAddWishlist((prev) => prev.filter((item) => item !== id))
  }
}


  //function for total amount
 const totalAmount = () =>{
  return Object.entries(cartItems).reduce((total,[itemId,size]) =>{
      const product = products.find((item) => item._id === itemId);
      if(!product) return;
    const price = Object.values(size).reduce((sum, qty) => sum + qty * product.new_price, 0);
    return total + price;
  },0)
 }


    const value = {
      products,
      cartItems,
      addToCart,
      cartCount,
      removeItemFromCart,
      totalAmount,
      addToWishlist,
      removeFromWishlist,
      addWishlist,
      setAddWishlist
    }
  return (
    <ECommerceContext.Provider value={value}>
      {children}
    </ECommerceContext.Provider>
  )
}

export const useECommerce = () => useContext(ECommerceContext)