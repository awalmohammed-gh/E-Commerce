import React from "react";
import { useNavigate } from "react-router-dom";
import { Eye, ShoppingBag } from "lucide-react";

const ECommerceCard = ({ product }) => {
  const { _id, name, image, new_price, old_price } = product;
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      
      {/* Image */}
      <div className="relative group  overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Button overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => navigate(`/product/${_id}`)}
            className="bg-white text-gray-800 px-5 py-2.5 rounded-xl font-medium hover:bg-[#1E3A8A] hover:text-white transition-all duration-200 flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform"
          >
            <Eye size={18} />
            View Details
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <p className="text-sm font-medium text-gray-800 line-clamp-2 hover:text-[#1E3A8A] transition-colors min-h-[48px]">
          {name}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {old_price && (
              <p className="text-gray-400 line-through text-sm">₵{old_price.toFixed(2)}</p>
            )}
            <p className="text-[#1E3A8A] font-bold text-lg">₵{new_price.toFixed(2)}</p>
          </div>
          
          <button 
            onClick={() => navigate(`/product/${_id}`)}
            className="bg-gray-100 hover:bg-[#1E3A8A] text-gray-600 cursor-pointer hover:text-white p-2 rounded-full transition-all duration-200"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ECommerceCard;