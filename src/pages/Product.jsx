import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useECommerce } from "../context/ECommerceProvider";
import { motion } from "motion/react";
import RelatedProduct from "../components/common/RelatedProduct";
import { 
  Home, 
  ShoppingBag, 
  Heart, 
  Truck, 
  RotateCcw, 
  Shield, 
  ChevronRight,
  Star,
  Minus,
  Plus,
  Check
} from "lucide-react";

const Product = () => {
  const { id } = useParams();
  const { products,addToCart } = useECommerce();
  const [thumbnails, setThumbnails] = useState("");
  const [productData, setProductData] = useState(null);
  const [size, setSize] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];

  useEffect(() => {
    const fetchData = () => {
      const productCopy = products.find((item) => item._id === id);
      if (productCopy) {
        setProductData(productCopy);
        setThumbnails(productCopy?.image[0]);
      }
    };
    fetchData();
  }, [id, products]);

  if (productData === null) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] flex-col">
        <motion.div
          className="w-12 h-12 border-4 border-[#1E3A8A] border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <p className="mt-4 text-gray-500 text-lg font-medium">Loading product...</p>
      </div>
    );
  }

  const handleSizeSelect = (s) => {
    if (selectedSize === s) {
      setSelectedSize(null);
      setSize([]);
    } else {
      setSelectedSize(s);
      setSize([s]);
    }
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      {/* Banner */}
      <div className='relative bg-[url("/productBG.jpg")] bg-cover bg-center bg-no-repeat w-full h-[35vh] md:h-[45vh] flex items-center justify-center px-6'>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl text-center text-white"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E3A8A]/30 backdrop-blur-sm rounded-full text-sm mb-4">
            <ShoppingBag size={14} />
            <span>Product Details</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {productData.name}
          </h1>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Explore product images, sizes, prices, and descriptions. Make informed purchases quickly and easily.
          </p>
        </motion.div>
      </div>

      <div className="bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumbs */}
          <motion.nav
            className="flex items-center gap-2 text-sm text-gray-500 mb-8"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link to="/" className="hover:text-[#1E3A8A] transition flex items-center gap-1">
              <Home size={14} />
              Home
            </Link>
            <ChevronRight size={12} />
            <span>Products</span>
            <ChevronRight size={12} />
            <Link
              to={`/${productData.category?.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-[#1E3A8A] transition capitalize"
            >
              {productData.category}
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#1E3A8A] font-medium truncate max-w-[200px]">{productData.name}</span>
          </motion.nav>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product Images */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex gap-4">
                {/* Thumbnails */}
                <div className="flex flex-col gap-3">
                  {productData.image.map((image, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setThumbnails(image)}
                      className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ${
                        thumbnails === image
                          ? "border-[#1E3A8A] shadow-md"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-16 h-16 md:w-20 md:h-20 object-cover"
                      />
                    </motion.button>
                  ))}
                </div>

                {/* Main Image */}
                <motion.div
                  className="flex-1 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <img
                    src={thumbnails}
                    alt={productData.name}
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">(128 reviews)</span>
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  {productData.name}
                </h1>

                <div className="flex items-center gap-3 mb-4">
                  {productData.old_price && (
                    <p className="text-gray-400 line-through text-lg">
                      ₵{productData.old_price.toFixed(2)}
                    </p>
                  )}
                  <p className="text-3xl font-bold text-[#1E3A8A]">
                    ₵{productData.new_price.toFixed(2)}
                  </p>
                </div>

                {/* Delivery Info */}
                <div className="border-t border-b border-gray-100 py-4 mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Truck size={16} className="text-[#1E3A8A]" />
                    <span>Free delivery on orders over ₵500</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <RotateCcw size={16} className="text-[#1E3A8A]" />
                    <span>30-day easy returns</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield size={16} className="text-[#1E3A8A]" />
                    <span>1-year warranty</span>
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Select Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {sizes.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => handleSizeSelect(s)}
                        className={`w-12 h-12 text-sm font-medium rounded-xl border-2 transition-all duration-200 
                          ${
                            selectedSize === s
                              ? "bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md"
                              : "bg-white text-gray-700 border-gray-200 hover:border-[#1E3A8A] hover:shadow-sm"
                          }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Quantity</h3>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={decrementQuantity}
                      className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center text-lg font-medium">{quantity}</span>
                    <button
                      onClick={() => addToCart(productData._id, size)}
                      className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <button className="flex-1 py-3.5 bg-gray-100 text-gray-800 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2">
                    <Heart size={18} />
                    Add to Wishlist
                  </button>
                  <button onClick={() => addToCart(productData._id, size)} className="flex-1 py-3.5 bg-[#1E3A8A] text-white font-semibold rounded-xl hover:bg-[#2E4A9A] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                    <ShoppingBag size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Description Section */}
          <motion.div
            className="mt-12 bg-white rounded-2xl shadow-lg p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-[#1E3A8A] rounded-full"></div>
              About This Product
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {productData.description}
            </p>
          </motion.div>
        </motion.div>

        {/* Related Products */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <RelatedProduct category={productData.category} />
        </div>
      </div>
    </>
  );
};

export default Product;