import { createContext, useContext, useEffect, useMemo, useState } from "react";
// import { products } from "../assets/all_products"
import toast from "react-hot-toast";
import {
  addItemToCart,
  isUserAuth,
  listProduct,
  removeCart,
  updateTheCart,
  userCart,
} from "../api/frontApis";
import axios from "axios";

const ECommerceContext = createContext();
export const ECommerceProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [addWishlist, setAddWishlist] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

  //function to get user data
  const fetchUserData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/auth/user-data`, {
        withCredentials: true,
      });
      // console.log(data);
      if (data.success) {
        setUser(data.userData);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
      setUser(null);
    }
  };

  //function to items to cart
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select size");
      return;
    }

    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        [size]: (prev[itemId]?.[size] || 0) + 1,
      },
    }));

    try {
      const { data } = await addItemToCart({ itemId, size });
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add to cart");
    }
  };

  //function to reduce items from cart
const removeItemFromCart = async (itemId, size) => {
  try {
    const { data } = await removeCart({ itemId, size });

    if (data.success) {
      const cartData = structuredClone(cartItems);

      if (cartData[itemId] && cartData[itemId][size]) {
        cartData[itemId][size] -= 1;

        if (cartData[itemId][size] <= 0) {
          delete cartData[itemId][size];
        }

        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      }

      setCartItems(cartData);
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.error(error);
    toast.error("Failed to remove item from cart");
  }
};

  //function to count cart
  const cartCount = useMemo(() => {
    return Object.values(cartItems).reduce((total, item) => {
      return total + Object.values(item).reduce((sum, qty) => sum + qty, 0);
    }, 0);
  }, [cartItems]);

  const addToWishlist = (id) => {
    setAddWishlist((prev) => {
      if (prev.includes(id)) return prev; // avoid duplicates
      return [...prev, id];
    });
  };

  const removeFromWishlist = (id) => {
    if (window.confirm("Are you sure yu want remove product from wishlist")) {
      setAddWishlist((prev) => prev.filter((item) => item !== id));
    }
  };

  //function for total amount
  const totalAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, size]) => {
      const product = products.find((item) => item._id === itemId);
      if (!product) return;
      const price = Object.values(size).reduce(
        (sum, qty) => sum + qty * product.new_price,
        0,
      );
      return total + price;
    }, 0);
  };

  //function to update cart
  const updateUserCart = async (itemId, size, quantity) => {
    const updatedCart = structuredClone(cartItems);

    updatedCart[itemId][size] = quantity;

    setCartItems(updatedCart);

    try {
      const { data } = await updateTheCart({ itemId, size, quantity });
      data.success ? toast.success(data.message) : toast.error(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  //function to see if the user is auth
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await isUserAuth();
        if (data.success) {
          await fetchUserData();
          setIsLoggedIn(true);
        }
      } catch (error) {
        setUser(null);
        setIsLoggedIn(false);
        console.error(error);
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    //fetch all product from backend

    const fetchProduct = async () => {
      try {
        const { data } = await listProduct();
        data.success ? setProducts(data.products) : toast.error(data.message);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, []);


  useEffect(() =>{
    const getUserCart = async() =>{
       try {
        const {data} = await userCart();
        data.success ? setCartItems(data.cartData): toast.error(data.message)
       } catch (error) {
        console.error(error);
        toast.error("Failed to fetch user cart")
       }
    }

    getUserCart()
  },[])

  const value = {
    products,
    cartItems,
    setCartItems,
    addToCart,
    cartCount,
    removeItemFromCart,
    totalAmount,
    addToWishlist,
    removeFromWishlist,
    addWishlist,
    setAddWishlist,
    isLoggedIn,
    setIsLoggedIn,
    user,
    fetchUserData,
    updateUserCart,
  };
  return (
    <ECommerceContext.Provider value={value}>
      {children}
    </ECommerceContext.Provider>
  );
};

export const useECommerce = () => useContext(ECommerceContext);
