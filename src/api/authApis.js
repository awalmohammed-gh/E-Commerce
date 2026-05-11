import api from "./axios";

//function admin login
export const adminLogin = (data) => {
  return api.post("/admin/admin-login", data);
};

//function admin auth
export const adminAuth = () => {
  return api.post("/admin/is-auth");
};

//function admin data
export const useAdminData = () => {
  return api.get("/admin/admin-data");
};

//function admin logout
export const adminLogout = () => {
  return api.post("/admin/admin-logout");
};

//function to add product
export const addProduct = (data) => {
  return api.post("/product/add-product", data);
};

//function admin login
export const removeProduct = (id) => {
  return api.delete(`/product/remove-product/${id}`);
};

//function list product
export const listProduct = () => {
  return api.get(`/product/list-product`);
};

//Order
export const allUserOrders = () => {
  return api.get(`/order/all-orders`);
};

export const statusUpdate = (data) => {
  return api.post(`/order/update-status`, data);
};