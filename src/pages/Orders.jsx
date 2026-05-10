import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  MapPin,
  Calendar,
  ChevronRight,
  ShoppingBag,
  Phone,
  Mail,
  Home,
} from "lucide-react";
import { userOrders } from "../api/frontApis";
import toast from "react-hot-toast";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    try {
      const { data } = await userOrders();
      console.log(data);
      if (data.success) {
        setOrders(data.orders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Processing":
        return "bg-yellow-100 text-yellow-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Processing":
        return <Clock size={14} />;
      case "Shipped":
        return <Truck size={14} />;
      case "Delivered":
        return <CheckCircle size={14} />;
      default:
        return <Package size={14} />;
    }
  };

  const getProgressStep = (status) => {
    switch (status) {
      case "Processing":
        return 1;
      case "Shipped":
        return 2;
      case "Delivered":
        return 3;
      case "Cancelled":
        return 0;
      default:
        return 0;
    }
  };

  if (orders.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
          .orders-root { font-family: 'DM Sans', sans-serif; }
          .orders-root h1, .orders-root h2, .orders-root h3 { font-family: 'Syne', sans-serif; }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .empty-anim { animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
        `}</style>
        <div className="orders-root text-center max-w-md empty-anim">
          <div className="w-28 h-28 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg border border-gray-100">
            <Package size={44} className="text-[#1E3A8A]" strokeWidth={1.5} />
          </div>
          <h2
            className="text-3xl font-bold text-gray-800 mb-3"
            style={{ fontFamily: "Syne,sans-serif" }}
          >
            No Orders Yet
          </h2>
          <p className="text-gray-500 mb-8 text-base leading-relaxed">
            You haven't placed any orders yet. Start shopping to see your orders
            here.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-8 py-3.5 rounded-2xl font-semibold hover:bg-[#2E4A9A] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#1E3A8A]/20"
          >
            <ShoppingBag size={18} />
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        .orders-root { font-family: 'DM Sans', sans-serif; }
        .orders-root h1, .orders-root h2, .orders-root h3, .orders-root .font-heading { font-family: 'Syne', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .order-card {
          animation: fadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .order-card:nth-child(1) { animation-delay: 0.05s; }
        .order-card:nth-child(2) { animation-delay: 0.12s; }
        .order-card:nth-child(3) { animation-delay: 0.19s; }
        .order-card:nth-child(4) { animation-delay: 0.26s; }
        .order-card:nth-child(5) { animation-delay: 0.33s; }

        .order-card:hover { transform: translateY(-2px); }
        .order-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }

        .track-btn {
          position: relative;
          overflow: hidden;
        }
        .track-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #1E3A8A;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
          border-radius: inherit;
        }
        .track-btn:hover::before { transform: scaleX(1); }
        .track-btn:hover span { color: white; position: relative; z-index: 1; }
        .track-btn span { transition: color 0.3s ease; }

        .progress-step-active {
          background: #1E3A8A;
          color: white;
          border-color: #1E3A8A;
        }
        .progress-step-done {
          background: #1E3A8A;
          color: white;
          border-color: #1E3A8A;
        }
        .progress-step-idle {
          background: white;
          color: #9ca3af;
          border-color: #e5e7eb;
        }
        .progress-line-active { background: #1E3A8A; }
        .progress-line-idle { background: #e5e7eb; }

        .header-anim {
          animation: slideIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>

      <div className="orders-root bg-gray-50 min-h-screen py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 header-anim">
            <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-4">
              <Link
                to="/"
                className="hover:text-[#1E3A8A] transition-colors flex items-center gap-1"
              >
                <Home size={13} /> Home
              </Link>
              <ChevronRight size={13} />
              <span className="text-[#1E3A8A] font-medium">My Orders</span>
            </div>

            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                  My Orders
                </h1>
                <p className="text-gray-400 mt-1 text-sm">
                  Track and manage all your purchases
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-sm flex items-center gap-2">
                <Package size={16} className="text-[#1E3A8A]" />
                <span className="text-sm font-semibold text-gray-700">
                  {orders.length} {orders.length === 1 ? "Order" : "Orders"}
                </span>
              </div>
            </div>
          </div>

          {/* Orders List */}
          <div className="space-y-6">
            {orders.map((order, index) => {
              const displayOrderId = `ORD-${new Date(order.updatedAt).getTime()}-${index}`;
              const step = getProgressStep(order.status);
              const steps = ["Processing", "Shipped", "Delivered"];

              return (
                <div
                  key={index}
                  className="order-card bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  {/* Order Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-4 border-b border-gray-50">
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                          Order ID
                        </span>
                        <span className="text-sm font-bold text-gray-800 font-heading">
                          {displayOrderId}
                        </span>
                      </div>
                      <div className="w-px h-4 bg-gray-200 hidden sm:block" />
                      <div className="flex items-center gap-1.5 text-gray-400">
                        <Calendar size={13} />
                        <span className="text-xs">
                          {new Date(order.updatedAt).toLocaleDateString(
                            "en-GB",
                            { day: "numeric", month: "long", year: "numeric" },
                          )}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}
                    >
                      {getStatusIcon(order.status)}
                      {order.status}
                    </span>
                  </div>

                  {/* Progress Tracker */}
                  {order.status !== "Cancelled" && (
                    <div className="px-6 py-5 border-b border-gray-50">
                      <div className="flex items-center justify-between relative">
                        {steps.map((s, i) => (
                          <React.Fragment key={s}>
                            <div className="flex flex-col items-center gap-1.5 z-10">
                              <div
                                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all
                                ${i + 1 < step ? "progress-step-done" : i + 1 === step ? "progress-step-active" : "progress-step-idle"}`}
                              >
                                {i + 1 < step ? (
                                  <CheckCircle size={14} />
                                ) : (
                                  i + 1
                                )}
                              </div>
                              <span
                                className={`text-xs font-medium hidden sm:block ${i + 1 <= step ? "text-[#1E3A8A]" : "text-gray-300"}`}
                              >
                                {s}
                              </span>
                            </div>
                            {i < steps.length - 1 && (
                              <div
                                className={`flex-1 h-0.5 mx-2 rounded-full transition-all ${i + 1 < step ? "progress-line-active" : "progress-line-idle"}`}
                              />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Order Items */}
                  <div className="divide-y divide-gray-50">
                    {order.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex flex-col sm:flex-row gap-5 p-6"
                      >
                        {/* Product Image */}
                        <div className="w-24 h-24 shrink-0 mx-auto sm:mx-0 rounded-2xl overflow-hidden bg-gray-50 shadow-sm border border-gray-100">
                          <img
                            src={item.image[0]}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-bold text-gray-800 mb-2 truncate font-heading">
                            {item.name}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="px-2.5 py-1 bg-gray-50 text-gray-500 text-xs rounded-lg border border-gray-100">
                              Size:{" "}
                              <span className="font-semibold text-gray-700">
                                {item.size}
                              </span>
                            </span>
                            <span className="px-2.5 py-1 bg-gray-50 text-gray-500 text-xs rounded-lg border border-gray-100">
                              Quantity:{" "}
                              <span className="font-semibold text-gray-700">
                                {item.quantity}
                              </span>
                            </span>
                            <span className="px-2.5 py-1 bg-[#1E3A8A]/5 text-[#1E3A8A] text-xs rounded-lg border border-[#1E3A8A]/10 font-semibold">
                              ₵{item.new_price.toFixed(2)} each
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <Truck size={12} />
                              Delivery: {order.deliveryStatus || "In Progress"}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              Est. Delivery:{" "}
                              {order.estimatedDelivery || "Pending"}
                            </span>
                          </div>
                        </div>

                        {/* Payment Method */}
                        <div className="text-center sm:text-left">
                          <span className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs rounded-lg border border-gray-100">
                            {order.paymentMethod === "COD"
                              ? "Pay on delivery"
                              : "Momo"}
                          </span>
                        </div>

                        {/* Total & Action */}
                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3 shrink-0">
                          <div className="text-right">
                            <p className="text-xs text-gray-400 mb-0.5">
                              Total Amount
                            </p>
                            <p className="text-2xl font-bold text-[#1E3A8A] font-heading">
                              ₵{order.amount}
                            </p>
                          </div>
                          <button onClick={fetchOrders} className="track-btn px-4 py-2 text-xs font-semibold border-2 border-[#1E3A8A]/20 text-[#1E3A8A] rounded-xl hover:border-[#1E3A8A] transition-all cursor-pointer">
                            <span>Track Order</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Shipping Address */}
                  <div className="px-6 py-4 bg-gray-50/60 border-t border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-white rounded-lg border border-gray-100 shadow-sm mt-0.5 shrink-0">
                        <MapPin size={13} className="text-[#1E3A8A]" />
                      </div>
                      <div className="w-full">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          Shipping Address
                        </p>
                        <p className="text-sm text-gray-700 font-medium">
                          {order.address?.firstName} {order.address?.lastName}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                          {order.address?.address}, {order.address?.city},{" "}
                          {order.address?.region}
                          {order.address?.landmark
                            ? ` · ${order.address.landmark}`
                            : ""}
                        </p>
                        <div className="flex items-center flex-wrap gap-3 mt-1.5">
                          <span className="flex items-center gap-1 text-xs text-gray-400">
                            <Phone size={11} /> {order.address?.phone}
                          </span>
                          {order.address?.email && (
                            <span className="flex items-center gap-1 text-xs text-gray-400">
                              <Mail size={11} /> {order.address?.email}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Support Section */}
          <div className="mt-8 bg-[#1E3A8A] rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                <Clock size={18} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base font-heading">
                  Need help with an order?
                </h3>
                <p className="text-white/60 text-sm">
                  Our support team is ready to assist you
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1E3A8A] px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all hover:gap-3 shrink-0"
            >
              Contact Support
              <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
