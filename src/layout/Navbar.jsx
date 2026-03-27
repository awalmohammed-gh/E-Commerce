import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Heart,
  ShoppingBag,
  User2,
  Search,
  LogOut,
  User,
  Package,
} from "lucide-react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);

  // simulate auth (replace with real auth later)
  const isLoggedIn = true;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    {
      name: "Categories",
      children: [
        { name: "Men", path: "/men" },
        { name: "Women", path: "/women" },
        { name: "Kids", path: `/kid` },
        { name: "Electronics", path: "/electronics" },
        { name: "Shoes", path: "/shoes" },
      ],
    },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          {/* LOGO */}
          <NavLink to="/" className="group">
            <h1 className="text-2xl font-bold tracking-tight">
              <span className="text-[#1E3A8A]">Shop</span>
              <span className="text-gray-800">Zone</span>
            </h1>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#1E3A8A] to-blue-400 transition-all duration-300"></div>
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {!link.children ? (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative group py-2 transition-colors duration-200 ${
                        isActive
                          ? "text-[#1E3A8A] font-semibold"
                          : "text-gray-700 hover:text-[#1E3A8A]"
                      }`
                    }
                  >
                    <span className="flex items-center gap-1">
                      {link.name}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E3A8A] group-hover:w-full transition-all duration-300"></span>
                  </NavLink>
                ) : (
                  <>
                    <button
                      className="flex items-center gap-1 py-2 text-gray-700 hover:text-[#1E3A8A] transition-colors duration-200 group"
                    >
                      {link.name}
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-200 ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* DROPDOWN */}
                    {openDropdown === index && (
                      <div className="absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-2xl py-2 min-w-56 z-50 border border-gray-100 animate-fadeInDown">
                        <div className="absolute -top-2 left-4 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>
                        {link.children.map((child, i) => (
                          <NavLink
                            key={i}
                            to={child.path}
                            className={({ isActive }) =>
                              `block px-5 py-2.5 text-sm transition-all duration-200 ${
                                isActive
                                  ? "text-[#1E3A8A] bg-blue-50 font-medium"
                                  : "text-gray-600 hover:text-[#1E3A8A] hover:bg-gray-50"
                              }`
                            }
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6 sm:gap-6">

            {/* Wishlist */}
            <div className="relative cursor-pointer group">
              <Heart className="w-5 h-5 text-gray-600 group-hover:text-[#1E3A8A] transition-colors" />
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white w-4.5 h-4.5 flex items-center justify-center rounded-full shadow-md">
                2
              </span>
            </div>

            {/* Cart */}
            <div className="relative cursor-pointer group">
              <ShoppingBag className="w-5 h-5 text-gray-600 group-hover:text-[#1E3A8A] transition-colors" />
              <span className="absolute -top-2 -right-2 text-xs bg-[#1E3A8A] text-white w-4.5 h-4.5 flex items-center justify-center rounded-full shadow-md">
                3
              </span>
            </div>

            {/* USER */}
            <div className="relative">
              <button
                onClick={() => setUserMenu(!userMenu)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
              >
                <User2 className="w-5 h-5 text-gray-600" />
                {isLoggedIn && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                )}
              </button>

              {/* USER DROPDOWN */}
              {userMenu && (
                <div className="absolute right-0 mt-3 bg-white shadow-2xl rounded-2xl w-56 py-2 z-50 border border-gray-100 animate-fadeInDown">
                  <div className="absolute -top-2 right-4 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>
                  {isLoggedIn ? (
                    <>
                      <div className="px-4 py-3 border-b border-gray-100 mb-1">
                        <p className="text-sm font-semibold text-gray-800">John Doe</p>
                        <p className="text-xs text-gray-500">john@example.com</p>
                      </div>
                      <NavLink
                        to="/account"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#1E3A8A] transition-colors"
                      >
                        <User size={16} />
                        My Account
                      </NavLink>
                      <NavLink
                        to="/orders"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#1E3A8A] transition-colors"
                      >
                        <Package size={16} />
                        My Orders
                      </NavLink>
                      <button
                        onClick={() => console.log("logout")}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </>
                  ) : (
                    <NavLink
                      to="/login"
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#1E3A8A] transition-colors"
                    >
                      Login
                    </NavLink>
                  )}
                </div>
              )}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-slideDown">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <div key={index} className="border-b border-gray-50 last:border-0">
                {!link.children ? (
                  <NavLink
                    to={link.path}
                    onClick={() => setMobileMenu(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 py-3 transition-colors ${
                        isActive
                          ? "text-[#1E3A8A] font-semibold"
                          : "text-gray-700 hover:text-[#1E3A8A]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === index ? null : index
                        )
                      }
                      className="flex justify-between items-center w-full py-3 text-gray-700 hover:text-[#1E3A8A] transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openDropdown === index && (
                      <div className="pl-8 pb-3 space-y-2 animate-slideDown">
                        {link.children.map((child, i) => (
                          <NavLink
                            key={i}
                            to={child.path}
                            onClick={() => setMobileMenu(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors"
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            {/* Mobile User Section */}
            {/* <div className="pt-4 mt-2 border-t border-gray-100">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#1E3A8A] to-blue-600 rounded-full flex items-center justify-center">
                      <User2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">John Doe</p>
                      <p className="text-xs text-gray-500">john@example.com</p>
                    </div>
                  </div>
                  <NavLink
                    to="/account"
                    className="flex items-center gap-3 py-2 text-gray-600 hover:text-[#1E3A8A]"
                    onClick={() => setMobileMenu(false)}
                  >
                    <User size={16} />
                    My Account
                  </NavLink>
                  <NavLink
                    to="/orders"
                    className="flex items-center gap-3 py-2 text-gray-600 hover:text-[#1E3A8A]"
                    onClick={() => setMobileMenu(false)}
                  >
                    <Package size={16} />
                    My Orders
                  </NavLink>
                  <button
                    onClick={() => console.log("logout")}
                    className="flex items-center gap-3 py-2 text-red-500 hover:text-red-600 w-full"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </>
              ) : (
                <NavLink
                  to="/login"
                  className="flex items-center gap-3 py-2 text-gray-600 hover:text-[#1E3A8A]"
                  onClick={() => setMobileMenu(false)}
                >
                  <User2 size={16} />
                  Login / Register
                </NavLink>
              )}
            </div> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;