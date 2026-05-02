import { api } from "./axios"


export const listProduct = () =>{
    return api.get("/product/list-product")
}


export const removeProduct = (id) =>{
    return api.get(`/product/remove-product/${id}`);
}

export const loginAccount = (data) =>{
    return api.post(`/auth/login`, data)
}



export const registerAccount = (data) =>{
    return api.post(`/auth/create-account`, data)
}


export const logoutAccount = () =>{
    return api.post(`/auth/logout`)
}


export const getUserData = () =>{
    return api.get(`/auth/user-data`)
}


export const isUserAuth = () =>{
    return api.post(`/auth/is-user-auth`);
}