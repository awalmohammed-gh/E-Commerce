import React from "react";
import { useNavigate } from "react-router-dom";
import { Eye, ShoppingBag, Heart } from "lucide-react";

const ECommerceCard = ({ product }) => {
  const { _id, name, image, new_price, old_price } = product;
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate(`/product/${_id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 rounded-t-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Quick View Button Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={goToProduct}
            className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-gray-800 px-5 py-2.5 rounded-xl font-medium hover:bg-[#1E3A8A] hover:text-white shadow-lg flex items-center gap-2"
          >
            <Eye size={18} />
            Quick View
          </button>
        </div>

        {/* Wishlist Button */}
        <button 
          className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-red-50 hover:text-red-500 transition-all duration-200 opacity-0 group-hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation();
            // Add to wishlist logic here
          }}
        >
          <Heart size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Product Name */}
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 hover:text-[#1E3A8A] transition-colors min-h-[48px] leading-relaxed">
          {name}
        </h3>

        {/* Price Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {old_price && (
              <p className="text-gray-400 line-through text-sm">
                ₵{old_price.toFixed(2)}
              </p>
            )}
            <p className="text-[#1E3A8A] font-bold text-xl">
              ₵{new_price.toFixed(2)}
            </p>
          </div>
          
          {/* Add to Cart Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              goToProduct();
            }}
            className="bg-gray-100 hover:bg-[#1E3A8A] text-gray-600 hover:text-white p-2 rounded-full transition-all duration-200 group-hover:shadow-md"
            aria-label="Add to cart"
          >
            <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Stock Status */}
        <div className="flex items-center justify-center pt-1">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            <p className="text-xs text-green-600 font-medium">In Stock</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerceCard;