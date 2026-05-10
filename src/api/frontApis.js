import { api } from "./axios";


//for product
export const listProduct = () => {
  return api.get("/product/list-product");
};

export const removeProduct = (id) => {
  return api.get(`/product/remove-product/${id}`);
};


//for authentication
export const loginAccount = (data) => {
  return api.post(`/auth/login`, data);
};

export const registerAccount = (data) => {
  return api.post(`/auth/create-account`, data);
};

export const logoutAccount = () => {
  return api.post(`/auth/logout`);
};

export const getUserData = () => {
  return api.get(`/auth/user-data`);
};

export const isUserAuth = () => {
  return api.post(`/auth/is-user-auth`);
};

// apis for cart

export const addItemToCart = (data) => {
  return api.post("/cart/add-to-cart", data);
};

export const updateTheCart = (data) => {
  return api.post("/update-cart", data);
};

export const removeCart = (data) => {
  return api.post("/cart/remove-cart", data);
};

export const userCart = () => {
  return api.get("/cart/get-user-cart");
};

//orders
export const placeOrders = (data) => {
  return api.post("/order/place-order",data);
};

//orders
export const userOrders = () => {
  return api.get("/order/user-orders");
};