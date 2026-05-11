import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Overview from "../pages/Overview";
import AddProduct from "../pages/AddProduct";
import ListProduct from "../pages/ListProduct";
import Orders from "../pages/Orders";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AdminLayout/>}>
            <Route index element={<Overview/>}/>
            <Route path="add" element={<AddProduct/>}/>
            <Route path="list" element={<ListProduct/>}/>
            <Route path="orders" element={<Orders/>}/>
        </Route>
    )
)

export default router;