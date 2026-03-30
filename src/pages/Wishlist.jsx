import { useECommerce } from "../context/ECommerceProvider";
import { ShoppingBag, Trash2, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { products, addWishlist, removeFromWishlist, addToCart } = useECommerce();

  if (!addWishlist || addWishlist.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Heart size={40} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">
            Your wishlist is empty
          </h2>
          <Link
            to="/shop"
            className="inline-block mt-4 px-5 py-2 bg-[#1E3A8A] text-white rounded-lg"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Heart className="text-[#1E3A8A]" />
          My Wishlist
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {addToWishlist.map((id, index) => {
            const product = products.find((p) => p._id === id);
            if (!product) return null;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border hover:shadow-md transition p-4"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-lg mb-3">
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-full h-48 object-cover hover:scale-105 transition"
                  />
                </div>

                {/* Info */}
                <h3 className="font-medium text-gray-800 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-[#1E3A8A] font-bold mt-1">
                  ₵{product.new_price}
                </p>

                {/* Actions */}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => addToCart(product._id, "M")}
                    className="flex-1 bg-[#1E3A8A] text-white py-2 rounded-lg text-sm flex items-center justify-center gap-1"
                  >
                    <ShoppingBag size={14} />
                    Add
                  </button>

                  <button
                    onClick={() => removeFromWishlist(product._id)}
                    className="p-2 border rounded-lg text-gray-500 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;