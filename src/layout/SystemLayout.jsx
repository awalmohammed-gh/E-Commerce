import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import  { Toaster } from 'react-hot-toast';

const SystemLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Toaster/>
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SystemLayout;