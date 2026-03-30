import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useECommerce } from '../context/ECommerceProvider';
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
  Home
} from 'lucide-react';

const Orders = () => {
  const { cartItems, products } = useECommerce();
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const dummyAddress = {
    firstName: "Mohammed",
    lastName: "Awal",
    email: "mohammed.awal@example.com",
    phone: "0244123456",
    address: "12 Kofi Annan Street",
    city: "Accra",
    region: "Greater Accra",
    landmark: "Near Makola Market",
  };

  useEffect(() => {
    const pushToCart = [];
    for (let itemId in cartItems) {
      for (let size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          pushToCart.push({
            id: itemId,
            size,
            quantity: cartItems[itemId][size],
            orderDate: new Date().toLocaleDateString(),
            orderId: `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
            status: "Processing",
            deliveryStatus: "Preparing",
            estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          });
        }
      }
    }
    setOrders(pushToCart);
  }, [cartItems]);

  const getStatusColor = (status) => {
    switch(status) {
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
    switch(status) {
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

  if (orders.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Package size={40} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No Orders Yet</h2>
          <p className="text-gray-500 mb-6">
            You haven't placed any orders yet. Start shopping to see your orders here.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2E4A9A] transition-colors"
          >
            <ShoppingBag size={18} />
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  // Group orders by orderId (in real scenario, orders would be grouped)
  const groupedOrders = orders.map((order, index) => ({
    ...order,
    orderId: `ORD-${new Date().getTime()}-${index}`,
    orderDate: new Date().toLocaleDateString(),
    totalAmount: order.quantity * (products.find(p => p._id === order.id)?.new_price || 0)
  }));

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:text-[#1E3A8A] transition">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#1E3A8A] font-medium">My Orders</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#1E3A8A]/10 rounded-xl">
              <Package size={28} className="text-[#1E3A8A]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
              <p className="text-gray-500 mt-1">Track and manage your orders</p>
            </div>
          </div>
        </div>

        {/* Orders Grid */}
        <div className="space-y-6">
          {groupedOrders.map((order, index) => {
            const product = products.find((item) => item._id === order.id);
            if (!product) return null;

            return (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Order Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Package size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-600">Order ID:</span>
                      <span className="text-sm font-semibold text-gray-800">{order.orderId}</span>
                    </div>
                    <div className="w-px h-4 bg-gray-300 hidden sm:block"></div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-600">{order.orderDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      {order.status}
                    </span>
                  </div>
                </div>

                {/* Order Content */}
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Product Image */}
                    <div className="w-32 h-32 flex-shrink-0">
                      <img
                        src={product.image[0]}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-xl shadow-sm"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {product.name}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <span>Size: <span className="font-medium">{order.size}</span></span>
                        <span>Quantity: <span className="font-medium">{order.quantity}</span></span>
                        <span>Price: <span className="font-medium text-[#1E3A8A]">₵{product.new_price.toFixed(2)}</span></span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Truck size={14} />
                          <span>Delivery Status: <span className="font-medium">{order.deliveryStatus}</span></span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar size={14} />
                          <span>Est. Delivery: <span className="font-medium">{order.estimatedDelivery}</span></span>
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Total Amount</p>
                      <p className="text-2xl font-bold text-[#1E3A8A]">
                        ₵{(product.new_price * order.quantity).toFixed(2)}
                      </p>
                      <button className="mt-3 px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        Track Order
                      </button>
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Shipping Address</p>
                      <p className="text-sm text-gray-600">
                        {dummyAddress.firstName} {dummyAddress.lastName}<br />
                        {dummyAddress.address}, {dummyAddress.city}<br />
                        {dummyAddress.region}, {dummyAddress.landmark}<br />
                        <span className="flex items-center gap-1 mt-1">
                          <Phone size={12} /> {dummyAddress.phone}
                          {dummyAddress.email && <><span className="mx-1">•</span><Mail size={12} /> {dummyAddress.email}</>}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Timeline Placeholder */}
        <div className="mt-8 bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Clock size={18} className="text-[#1E3A8A]" />
            Need Help With Your Order?
          </h3>
          <p className="text-gray-600 mb-4">
            If you have any questions about your order, please contact our customer support team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-[#1E3A8A] font-medium hover:gap-3 transition-all"
          >
            Contact Support
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Orders;