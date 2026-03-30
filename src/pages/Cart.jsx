import { useEffect, useState } from "react";
import { useECommerce } from "../context/ECommerceProvider";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  CreditCard,
  ArrowLeft,
  Package,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, products, totalAmount, removeItemFromCart, addToCart } =
    useECommerce();
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate()

  // Prepare cart data
  useEffect(() => {
    const pushToCart = [];
    for (let itemId in cartItems) {
      for (let size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          pushToCart.push({
            id: itemId,
            size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }
    setCartData(pushToCart);
  }, [cartItems]);

  const handleRemoveItem = (id, size) => {
    removeItemFromCart(id, size);
  };

  const handleUpdateQuantity = (id, size, action) => {
    if (action === "increase") {
      addToCart(id, size);
    } else if (action === "decrease") {
      removeItemFromCart(id, size);
    }
  };

  if (cartData.length === 0) {
    return (
      <div className="min-h-[60vh] bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={40} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2E4A9A] transition-colors"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <ShoppingBag size={28} className="text-[#1E3A8A]" />
              Shopping Cart
            </h1>
            <p className="text-gray-500 mt-1 text-sm">
              {cartData.length} item{cartData.length !== 1 ? "s" : ""} in your
              cart
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* LEFT - CART */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="hidden md:grid grid-cols-6 px-6 py-4 text-sm font-semibold text-gray-600 border-b bg-gray-50">
                  <span>Product</span>
                  <span>Size</span>
                  <span>Price</span>
                  <span className="sm:ml-5">Quantity</span>
                  <span className="sm:ml-5">Total</span>
                  <span>Remove</span>
                </div>

                {/* Items */}
                <div className="divide-y">
                  {cartData.map((item, index) => {
                    const product = products.find((p) => p._id === item.id);
                    if (!product) return null;

                    const subtotal = item.quantity * product.new_price;

                    return (
                      <div key={index} className="px-4 md:px-6 py-5">
                        {/* DESKTOP */}
                        <div className="hidden md:grid grid-cols-6 items-center gap-4">
                          {/* Product */}
                          <div className="flex items-center gap-4">
                            <img
                              src={product.image[0]}
                              alt={product.name}
                              className="w-14 h-14 rounded-lg object-cover border"
                            />
                            <div>
                              <p className="font-medium text-gray-800 text-sm line-clamp-2">
                                {product.name}
                              </p>
                              <p className="text-xs text-gray-400">
                                SKU: {product._id.slice(-6)}
                              </p>
                            </div>
                          </div>

                          {/* Size */}
                          <div>
                            <span className="px-3 py-1 bg-gray-100 text-xs rounded-md font-medium">
                              {item.size}
                            </span>
                          </div>

                          {/* Price */}
                          <div className="font-medium text-gray-700">
                            ₵{product.new_price.toFixed(2)}
                          </div>

                          {/* Quantity */}
                          <div>
                            <div className="flex items-center gap-2 bg-gray-50 border rounded-lg px-2 py-1 w-fit">
                              <button
                                onClick={() =>
                                  handleUpdateQuantity(
                                    item.id,
                                    item.size,
                                    "decrease",
                                  )
                                }
                                className="p-1 hover:bg-gray-200 rounded"
                              >
                                <Minus size={14} />
                              </button>

                              <span className="w-6 text-center text-sm font-medium">
                                {item.quantity}
                              </span>

                              <button
                                onClick={() =>
                                  handleUpdateQuantity(
                                    item.id,
                                    item.size,
                                    "increase",
                                  )
                                }
                                className="p-1 hover:bg-gray-200 rounded"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>

                          {/* Subtotal */}
                          <div className="font-semibold text-[#1E3A8A]">
                            ₵{subtotal.toFixed(2)}
                          </div>

                          {/* Remove */}
                          <div>
                            <button
                              onClick={() =>
                                handleRemoveItem(item.id, item.size)
                              }
                              className="p-2 rounded-md hover:bg-red-50 text-gray-400 hover:text-red-500 transition"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>

                        {/* MOBILE */}
                        <div className="md:hidden flex gap-4">
                          <img
                            src={product.image[0]}
                            className="w-20 h-20 rounded-xl object-cover border"
                          />

                          <div className="flex-1">
                            <p className="font-medium text-sm text-gray-800 line-clamp-2">
                              {product.name}
                            </p>

                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                Size: {item.size}
                              </span>
                              <span className="font-semibold text-[#1E3A8A]">
                                ₵{product.new_price.toFixed(2)}
                              </span>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() =>
                                    handleUpdateQuantity(
                                      item.id,
                                      item.size,
                                      "decrease",
                                    )
                                  }
                                  className="w-7 h-7 border rounded flex items-center justify-center"
                                >
                                  <Minus size={12} />
                                </button>

                                <span className="text-sm">{item.quantity}</span>

                                <button
                                  onClick={() =>
                                    handleUpdateQuantity(
                                      item.id,
                                      item.size,
                                      "increase",
                                    )
                                  }
                                  className="w-7 h-7 border rounded flex items-center justify-center"
                                >
                                  <Plus size={12} />
                                </button>
                              </div>

                              <div className="text-right">
                                <p className="text-xs text-gray-400">
                                  Subtotal
                                </p>
                                <p className="font-semibold text-[#1E3A8A]">
                                  ₵{subtotal.toFixed(2)}
                                </p>
                              </div>
                            </div>

                            <button
                              onClick={() =>
                                handleRemoveItem(item.id, item.size)
                              }
                              className="text-xs text-red-500 mt-2 flex items-center gap-1"
                            >
                              <Trash2 size={12} />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT - SUMMARY */}
            <div className="lg:w-96">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
                <h3 className="font-bold text-lg mb-5 flex items-center gap-2">
                  <Package size={18} />
                  Order Summary
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₵{totalAmount().toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>

                  <div className="border-t pt-3 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-[#1E3A8A]">
                      ₵{totalAmount().toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                onClick={() =>{
                  if(cartData.length === 0) return;
                  navigate("/checkout")
                }}
                 className={`w-full mt-6 bg-gray-400 text-white py-3 rounded-xl font-semibold hover:bg-[#2E4A9A] transition ${cartData.length > 1 && "bg-[#1E3A8A] cursor-not-allowed"}`}>
                  Proceed to Checkout
                </button>

                <Link
                  to="/shop"
                  className="block text-center mt-4 text-sm text-gray-500 hover:text-[#1E3A8A]"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
