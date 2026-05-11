import { createContext, useContext, useEffect, useState } from "react";
import { adminAuth, adminLogout} from "../api/authApis";
import axios from "axios";
import toast from "react-hot-toast";

const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [getAdmin, setGetAdmin] = useState(null);

  const backendUrl =  import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

  // GET ADMIN DATA
  const adminData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/admin/admin-data`, {
        withCredentials: true,
      });

      if (data.success) {
        setGetAdmin(data.admin);
       // console.log(data.admin);
      } else {
        setGetAdmin(null);
      }
    } catch (error) {
      console.error(error);
      setGetAdmin(null);
    }
  };

   const logoutAdmin = async () => {
     try {
       const { data } = await adminLogout();

       if (data.success) {
         toast.success(data.message);
         setGetAdmin(null);
       } else {
         toast.error(data.message);
       }
     } catch (error) {
       console.error(error);
       toast.error(error.response?.data?.message || "Logout failed");
     }
   };


  // CHECK AUTH ON LOAD
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await adminAuth();
        if (data.success) {
          await adminData();
        } else {
          setGetAdmin(null);
        }
      } catch (error) {
        setGetAdmin(null);
        console.error(error);
      }
    };

    checkAuth();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        getAdmin,
        adminData,
        setGetAdmin,
        logoutAdmin
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => useContext(AdminContext);
