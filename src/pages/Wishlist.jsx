import { useECommerce } from "../context/ECommerceProvider";
import { ShoppingBag, Trash2, Heart, ArrowLeft, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { products, addWishlist, removeFromWishlist, addToCart } = useECommerce();

  if (!addWishlist || addWishlist.length === 0) {
    return (
      <div className="min-h-[60vh] bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart size={40} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Your wishlist is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Save your favorite items here and come back to them anytime.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2E4A9A] transition-colors"
          >
            <ArrowLeft size={18} />
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-[#1E3A8A]/10 rounded-xl">
              <Heart className="text-[#1E3A8A]" size={28} fill="#1E3A8A" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">My Wishlist</h1>
          </div>
          <p className="text-gray-500">
            {addWishlist.length} item{addWishlist.length !== 1 ? "s" : ""} saved in your wishlist
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {addWishlist.map((id, index) => {
            const product = products.find((p) => p._id === id);
            if (!product) return null;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-100">
                  <Link to={`/product/${product._id}`}>
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </Link>
                  
                  {/* Quick Actions Overlay */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => removeFromWishlist(product._id)}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 hover:text-red-500 transition-colors"
                      title="Remove from wishlist"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  {/* Product Name */}
                  <Link to={`/product/${product._id}`}>
                    <h3 className="font-semibold text-gray-800 line-clamp-2 hover:text-[#1E3A8A] transition-colors min-h-12 text-sm">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                       <p className="text-gray-400 line-through text-xs">
                          ₵{product.old_price.toFixed(2)}
                        </p>
                      <p className="text-[#1E3A8A] font-bold text-xl">
                        ₵{product.new_price.toFixed(2)}
                      </p>
                    </div>

                  {/* Stock Status */}
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <p className="text-xs text-green-600 font-medium">In Stock</p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => addToCart(product._id, "M")}
                      className="flex-1 bg-[#1E3A8A] text-white py-2.5 rounded-xl text-sm font-medium hover:bg-[#2E4A9A] transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                    >
                      <ShoppingBag size={16} className="group-hover/btn:scale-110 transition-transform" />
                      Add to Cart
                    </button>

                    <button
                      onClick={() => removeFromWishlist(product._id)}
                      className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all duration-200"
                      title="Remove from wishlist"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Continue Shopping Button */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1E3A8A] text-[#1E3A8A] rounded-xl font-semibold hover:bg-[#1E3A8A] hover:text-white transition-all duration-200"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;