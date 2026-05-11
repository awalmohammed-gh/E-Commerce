import {
  LayoutDashboard,
  PlusCircle,
  List,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  LogIn,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { NavLink} from "react-router-dom";
import { useAdminContext } from "../context/AdminContextProvider";

const Sidebar = ({ onOpen }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { getAdmin, logoutAdmin } = useAdminContext();

  const navLinks = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={20} /> },
    { name: "Add Product", path: "/add", icon: <PlusCircle size={20} /> },
    { name: "List Product", path: "/list", icon: <List size={20} /> },
    { name: "Orders", path: "/orders", icon: <ShoppingBag size={20} /> },
  ];



  return (
    <div
      className={`${isCollapsed ? "w-20" : "w-64"} bg-slate-900 text-white flex flex-col transition-all duration-300 h-screen sticky top-0`}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between p-5 border-b border-slate-700">
        {!isCollapsed && <span className="text-xl font-bold">Admin Panel</span>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded hover:bg-slate-800"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* NAV LINKS - Now checks getAdmin properly */}
      {getAdmin && (
        <nav className="flex-1 py-6">
          <ul className="space-y-2 px-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-800"
                    }`
                  }
                >
                  <span>{link.icon}</span>
                  {!isCollapsed && (
                    <span className="text-sm font-medium">{link.name}</span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* FOOTER */}
      <div className="p-4 border-t border-slate-700">
        {getAdmin ? (
          <button
            onClick={() => logoutAdmin()}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full hover:bg-red-600 transition ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <LogOut size={20} />
            {!isCollapsed && <span>Logout</span>}
          </button>
        ) : (
          <button
            onClick={onOpen}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full hover:bg-blue-600 transition ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <LogIn size={20} />
            {!isCollapsed && <span>Login</span>}
          </button>
        )}

        {!isCollapsed && (
          <p className="text-xs text-slate-500 mt-3 text-center">
            {getAdmin ? "Logged in as Admin" : "Please login to continue"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
