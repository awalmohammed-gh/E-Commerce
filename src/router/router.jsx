import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../pages/Home";
import SystemLayout from "../layout/SystemLayout";
import CategoryPage from "../pages/CategoryPage";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";
import Wishlist from "../pages/Wishlist";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";

const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path="/" element={<SystemLayout/>}>
           <Route index element={<Home/>}/>
           <Route path="/:category" element={<CategoryPage/>}/>
           <Route path="product/:id" element={<Product/>}/>
           <Route path="shop" element={<Shop/>}/>
           <Route path="cart" element={<Cart/>}/>
           <Route path="wishlist" element={<Wishlist/>}/>
           <Route path="order" element={<Orders/>}/>
           <Route path="checkout" element={<Checkout/>}/>
           <Route path="contact" element={<Contact/>}/>
       </Route>
    )
)

export default router;