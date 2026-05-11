import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import AdminLoginForm from "../pages/AdminLoginForm";
import { Toaster } from "react-hot-toast";

const AdminLayout = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Toaster />

      <Sidebar onOpen={() => setShowLoginModal(true)} />

      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          <Outlet />
        </div>
      </main>

      {showLoginModal && (
        <AdminLoginForm onClose={() => setShowLoginModal(false)} />
      )}
    </div>
  );
};

export default AdminLayout;
