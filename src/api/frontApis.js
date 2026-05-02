import { api } from "./axios"


export const listProduct = () =>{
    return api.get("/product/list-product")
}


export const removeProduct = (id) =>{
    return api.get(`/product/remove-product/${id}`);
}