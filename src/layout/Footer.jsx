import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ShoppingBag, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  Shield,
  Truck,
  CreditCard
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-6 h-6 text-[#1E3A8A]" />
              <h3 className="text-xl font-bold text-white">ShopSmart</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your one-stop shop for essentials and trending products. Quality
              items, fast delivery, and trusted service.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Heart size={12} className="text-red-500" />
                Customer First
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Shield size={12} className="text-green-500" />
                Secure Shopping
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition flex items-center gap-1 group">
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition flex items-center gap-1 group">
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition flex items-center gap-1 group">
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition flex items-center gap-1 group">
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/faq" className="hover:text-white transition flex items-center gap-1 group">
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-white transition flex items-center gap-1 group">
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-white transition flex items-center gap-1 group">
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition flex items-center gap-1 group">
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#1E3A8A]" />
                <span>support@shopsmart.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#1E3A8A]" />
                <span>+233 241529904</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-[#1E3A8A]" />
                <span>Accra, Ghana</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Payment Methods & Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 pt-8 mb-8"
        >
          <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-xs">
            <div className="flex items-center gap-2">
              <Truck size={14} />
              <span>Free Shipping on Orders $50+</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard size={14} />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} />
              <span>24/7 Customer Support</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
          className="text-center text-gray-500 text-sm pt-4 border-t border-gray-800"
        >
          <p>&copy; {new Date().getFullYear()} ShopSmart. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;