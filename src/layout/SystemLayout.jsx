import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import AuthenticationForm from "../pages/AuthenticationForm";

const SystemLayout = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster />

      {/* Pass toggle function to Navbar */}
      <Navbar onAuthClick={() => setShowAuthForm(true)} />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />

      {/* Full-page authentication overlay */}
      {showAuthForm && <AuthenticationForm onClose={() => setShowAuthForm(false)} />}
    </div>
  );
};

export default SystemLayout;