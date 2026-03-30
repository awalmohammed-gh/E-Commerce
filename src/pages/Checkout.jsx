import { useEffect, useState } from "react";
import { useECommerce } from "../context/ECommerceProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  Navigation, 
  CreditCard, 
  Smartphone,
  Truck,
  Package,
  Edit,
  ArrowLeft,
  ChevronRight,
  CheckCircle,
  ShoppingBag
} from "lucide-react";

const Checkout = () => {
  const { cartItems, products, totalAmount } = useECommerce();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
    landmark: "",
  });

  const [checkout, setCheckout] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
    setCheckout(pushToCart);
  }, [cartItems]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.address || !formData.city || !formData.region) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (checkout.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const orderData = {
      customer: { ...formData },
      payment: { method: paymentMethod },
      items: checkout,
      totalAmount: totalAmount(),
    };

    console.log("Order Submitted:", orderData);
    toast.success("Order submitted successfully!");
    setIsSubmitting(false);
    // TODO: send orderData to backend / payment gateway
  };


  if (checkout.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={40} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">
            Add some items to your cart before checking out.
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Link to="/cart" className="hover:text-[#1E3A8A] transition">Cart</Link>
            <ChevronRight size={14} />
            <span className="text-[#1E3A8A] font-medium">Checkout</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
          <p className="text-gray-500 mt-1">Complete your order information below</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <form className="flex-1 space-y-6" onSubmit={handleSubmit}>
            {/* Shipping Details */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-100">
                <div className="p-2 bg-[#1E3A8A]/10 rounded-lg">
                  <Truck size={20} className="text-[#1E3A8A]" />
                </div>
                <h2 className="text-xl font-semibold text-gray-700">Shipping Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all ${
                        !formData.firstName ? "border-gray-200" : "border-gray-300"
                      }`}
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="phone"
                      placeholder="024XXXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="address"
                      placeholder="Street address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="city"
                      placeholder="Accra"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Region <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Navigation size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="region"
                      placeholder="Greater Accra"
                      value={formData.region}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Landmark (Optional)</label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="landmark"
                      placeholder="Near the mall"
                      value={formData.landmark}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-100">
                <div className="p-2 bg-[#1E3A8A]/10 rounded-lg">
                  <CreditCard size={20} className="text-[#1E3A8A]" />
                </div>
                <h2 className="text-xl font-semibold text-gray-700">Payment Method</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label
                  className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    paymentMethod === "cod"
                      ? "border-[#1E3A8A] bg-[#1E3A8A]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="w-4 h-4 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                  />
                  <div className="flex items-center gap-2">
                    <Truck size={18} className="text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-800">Cash on Delivery</p>
                      <p className="text-xs text-gray-500">Pay when you receive</p>
                    </div>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    paymentMethod === "momo"
                      ? "border-[#1E3A8A] bg-[#1E3A8A]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="momo"
                    checked={paymentMethod === "momo"}
                    onChange={() => setPaymentMethod("momo")}
                    className="w-4 h-4 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                  />
                  <div className="flex items-center gap-2">
                    <Smartphone size={18} className="text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-800">Mobile Money</p>
                      <p className="text-xs text-gray-500">Pay via MoMo</p>
                    </div>
                  </div>
                </label>
              </div>

              {paymentMethod === "momo" && (
                <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-blue-800">You will receive a payment prompt on your registered mobile money number.</p>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-[#1E3A8A] text-white font-semibold rounded-xl hover:bg-[#2E4A9A] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  <CheckCircle size={18} />
                  Place Order
                </>
              )}
            </button>
          </form>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                <div className="p-2 bg-[#1E3A8A]/10 rounded-lg">
                  <Package size={18} className="text-[#1E3A8A]" />
                </div>
                <h2 className="text-xl font-semibold text-gray-700">Order Summary</h2>
              </div>

              <div className="max-h-80 overflow-y-auto space-y-3 mb-4 custom-scrollbar">
                {checkout.map((item, index) => {
                  const product = products.find((p) => p._id === item.id);
                  if (!product) return null;
                  return (
                    <div key={index} className="flex justify-between items-start py-2">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">{product.name}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <span>Size: {item.size}</span>
                          <span>Qty: {item.quantity}</span>
                        </div>
                      </div>
                      <span className="font-bold text-[#1E3A8A] text-sm">
                        ₵{(product.new_price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₵{totalAmount().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-100">
                  <span>Total</span>
                  <span className="text-[#1E3A8A]">₵{totalAmount().toFixed(2)}</span>
                </div>
              </div>

              {/* Modify Cart Button */}
              <Link
                to="/cart"
                className="w-full mt-4 py-2.5 border-2 border-[#1E3A8A] text-[#1E3A8A] font-semibold rounded-xl hover:bg-[#1E3A8A] hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Edit size={16} />
                Modify Cart
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1E3A8A;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Checkout;