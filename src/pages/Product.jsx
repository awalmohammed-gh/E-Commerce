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
  Minus,
  Plus,
  Check,
} from "lucide-react";
import toast from "react-hot-toast";

const Product = () => {
  const { id } = useParams();
  const { products, addToCart, removeItemFromCart, cartItems } = useECommerce();

  const [thumbnails, setThumbnails] = useState("");
  const [productData, setProductData] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];

  useEffect(() => {
    const productCopy = products.find((item) => item._id === id);
    if (productCopy) {
      setProductData(productCopy);
      setThumbnails(productCopy.image[0]);
    }
  }, [id, products]);

  if (!productData) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] flex-col">
        <motion.div
          className="w-12 h-12 border-4 border-[#1E3A8A] border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <p className="mt-4 text-gray-500 text-lg font-medium">
          Loading product...
        </p>
      </div>
    );
  }

  const quantity = cartItems?.[productData._id]?.[selectedSize] || 0;

  return (
    <>
      {/* Banner */}
      <div className='relative bg-[url("/productBG.jpg")] bg-cover bg-center h-[40vh] flex items-center justify-center'>
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold">{productData.name}</h1>
        </motion.div>
      </div>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-10">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-[#1E3A8A] hover:underline flex items-center gap-1">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={12} />
            <span>{productData.category}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">

            {/* Images */}
            <div className="lg:w-1/2 flex gap-4">
              
              {/* Thumbnails */}
              <div className="flex flex-col gap-3">
                {productData.image.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setThumbnails(img)}
                    className={`border-2 rounded-lg overflow-hidden ${
                      thumbnails === img ? "border-[#1E3A8A]" : "border-gray-200"
                    }`}
                  >
                    <img src={img} className="w-16 h-16 object-cover" />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 bg-white rounded-xl overflow-hidden border">
                <img
                  src={thumbnails}
                  className="w-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
            </div>

            {/* Details */}
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">

                {/* Title */}
                <h2 className="text-2xl font-bold">{productData.name}</h2>

                {/* Price */}
                <div className="flex items-center gap-3">
                  {productData.old_price && (
                    <span className="line-through text-gray-400">
                      ₵{productData.old_price}
                    </span>
                  )}
                  <span className="text-3xl font-extrabold text-[#1E3A8A]">
                    ₵{productData.new_price}
                  </span>
                </div>

                {/* Info */}
                <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                  <p className="flex gap-2 items-center">
                    <Truck size={14} /> Free delivery
                  </p>
                  <p className="flex gap-2 items-center">
                    <RotateCcw size={14} /> Easy returns
                  </p>
                  <p className="flex gap-2 items-center">
                    <Shield size={14} /> Warranty included
                  </p>
                </div>

                {/* Sizes */}
                <div>
                  <p className="mb-2 font-medium">Select Size</p>
                  <div className="flex gap-3 flex-wrap">
                    {sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() =>
                          setSelectedSize((prev) => (prev === s ? null : s))
                        }
                        className={`relative w-12 h-12 rounded-lg border ${
                          selectedSize === s
                            ? "bg-[#1E3A8A] text-white"
                            : "bg-white"
                        }`}
                      >
                        {s}
                        {selectedSize === s && (
                          <Check size={12} className="absolute top-1 right-1" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <p className="mb-2 font-medium">Quantity</p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        removeItemFromCart(productData._id, selectedSize)
                      }
                      className="w-10 h-10 border rounded flex items-center justify-center"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="w-10 text-center font-semibold">
                      {quantity}
                    </span>

                    <button
                      onClick={() => {
                        if (!selectedSize) {
                          toast.error("Select size");
                          return;
                        }
                        addToCart(productData._id, selectedSize);
                      }}
                      className="w-10 h-10 border rounded flex items-center justify-center"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <button className="flex-1 flex items-center justify-center mx-auto  bg-gray-100 py-3 rounded-lg">
                  
                    <Heart size={18} />
                  </button>

                  <button
                    onClick={() => addToCart(productData._id, selectedSize)}
                    className={`flex-1 py-3 rounded-lg text-white ${
                      selectedSize
                        ? "bg-[#1E3A8A]"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-10 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-bold mb-2">Description</h3>
            <p className="text-gray-600">{productData.description}</p>
          </div>

          {/* Related */}
          <div className="mt-10">
            <RelatedProduct category={productData.category} />
          </div>

        </div>
      </div>
    </>
  );
};

export default Product;