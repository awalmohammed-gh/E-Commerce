import { useEffect } from "react";
import { useState } from "react";
import { allUserOrders, statusUpdate } from "../api/authApis";
import toast from "react-hot-toast";
import {
  PackageOpen,
  MapPin,
  Phone,
  CreditCard,
  Calendar,
  ShoppingBag,
  Truck,
  CheckCircle2,
  Clock,
  Box,
  PackageCheck,
} from "lucide-react";

const statusConfig = {
  "Order Placed": {
    icon: ShoppingBag,
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
  },
  Packing: {
    icon: Box,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
  },
  Shipped: {
    icon: Truck,
    color: "text-purple-400",
    bg: "bg-purple-400/10 border-purple-400/20",
  },
  "Out for delivery": {
    icon: PackageCheck,
    color: "text-orange-400",
    bg: "bg-orange-400/10 border-orange-400/20",
  },
  Delivered: {
    icon: CheckCircle2,
    color: "text-green-400",
    bg: "bg-green-400/10 border-green-400/20",
  },
};

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const { data } = await allUserOrders();
      if (data.success) {
        setOrders(data.orders);
        console.log(data.orders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch user orders");
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const { data } = await statusUpdate({
        orderId,
        status: event.target.value,
      });
      if (data.success) {
        await fetchAllOrders();
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900/60 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
            <PackageOpen className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white tracking-tight">
              Orders Management
            </h1>
            <p className="text-xs text-gray-500">
              {orders.length} order{orders.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {orders.length > 0 ? (
          <div className="flex flex-col gap-5">
            {orders.map((order, index) => {
              const currentStatus = order.status || "Order Placed";
              const StatusIcon = statusConfig[currentStatus]?.icon || Clock;
              const statusColor =
                statusConfig[currentStatus]?.color || "text-gray-400";
              const statusBg =
                statusConfig[currentStatus]?.bg ||
                "bg-gray-800 border-gray-700";

              return (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-colors duration-200"
                >
                  {/* Order Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 border-b border-gray-800 bg-gray-900/80">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gray-800">
                        <PackageOpen className="w-4 h-4 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                          Order #{order._id.slice(-9)}
                        </p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <Calendar className="w-3 h-3 text-gray-500" />
                          <span className="text-sm text-gray-300">
                            {new Date(order.updatedAt).toLocaleDateString(
                              "en-GH",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              },
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xl font-bold text-white">
                      {order.amount.toLocaleString("en", {
                        style: "currency",
                        currency: "GHS",
                      })}
                    </p>
                  </div>

                  <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Items */}
                    <div className="md:col-span-2 flex flex-col gap-2">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Items
                      </p>
                      <div className="flex flex-col gap-2">
                        {order.items.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between bg-gray-800/60 rounded-xl px-4 py-3 border border-gray-800"
                          >
                            <span className="text-sm font-medium text-white truncate max-w-[55%]">
                              {item.name}
                            </span>
                            <div className="flex items-center gap-3 text-xs text-gray-400 shrink-0">
                              <span className="bg-gray-700/60 rounded-lg px-2 py-1">
                                Qty: {item.quantity}
                              </span>
                              <span className="bg-gray-700/60 rounded-lg px-2 py-1">
                                Size: {item.size}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-4">
                      {/* Address */}
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Delivery
                        </p>
                        <div className="bg-gray-800/60 border border-gray-800 rounded-xl px-4 py-3 flex flex-col gap-1.5">
                          <p className="text-sm font-semibold text-white">
                            {order.address.firstName +
                              " " +
                              order.address.lastName}
                          </p>
                          <div className="flex items-start gap-1.5 text-gray-400">
                            <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gray-500" />
                            <span className="text-xs leading-relaxed">
                              {order.address.address}, {order.address.region},{" "}
                              {order.address.city}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-gray-400">
                            <Phone className="w-3.5 h-3.5 shrink-0 text-gray-500" />
                            <span className="text-xs">
                              {order.address.phone}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Payment Info */}
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Payment
                        </p>
                        <div className="bg-gray-800/60 border border-gray-800 rounded-xl px-4 py-3 flex flex-col gap-1.5">
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-3.5 h-3.5 text-gray-500" />
                            <span className="text-xs text-gray-300">
                              {order.paymentMethod
                                ? "Cash on Delivery"
                                : "Momo"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full ${order.payment ? "bg-green-400" : "bg-yellow-400"}`}
                            />
                            <span
                              className={`text-xs font-medium ${order.payment ? "text-green-400" : "text-yellow-400"}`}
                            >
                              {order.payment ? "Paid" : "Pending"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500 text-xs">
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>
                              {order.items.length} item
                              {order.items.length !== 1 ? "s" : ""}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status Bar */}
                  <div className="px-5 pb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div
                      className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border ${statusBg} ${statusColor}`}
                    >
                      <StatusIcon className="w-3.5 h-3.5" />
                      {currentStatus}
                    </div>
                    <select
                      value={order.status}
                      onChange={(event) => statusHandler(event, order._id)}
                      className="text-sm bg-gray-800 border border-gray-700 text-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 cursor-pointer transition-all"
                    >
                      <option value="Order Placed">Order Placed</option>
                      <option value="Packing">Packing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Out for delivery">Out for delivery</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-28 gap-5 text-center">
            <div className="p-5 rounded-2xl bg-gray-800/60 border border-gray-700">
              <PackageOpen className="w-10 h-10 text-gray-500" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-300">
                No Orders Found
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Your orders will appear here once placed.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
