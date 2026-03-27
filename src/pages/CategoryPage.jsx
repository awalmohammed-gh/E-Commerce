import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useECommerce } from '../context/ECommerceProvider';
import { motion } from "motion/react";
import ECommerceCard from '../components/card/ECommerceCard';
import Newsletter from '../components/common/Newsletter';
import { 
  Home, 
  ChevronRight, 
  ShoppingBag, 
  Package, 
  Sparkles,
  Filter
} from 'lucide-react';

const CategoryPage = () => {
  const { category } = useParams();
  const { products } = useECommerce();

  const categoryData = useMemo(() => {
    return products.filter(
      (item) => item?.category?.toLowerCase() === category.toLowerCase()
    );
  }, [category, products]);

  const categoryName = category === "kid" ? "Kids" : category;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className='relative bg-[url("/shopBg.jpg")] bg-cover bg-center bg-no-repeat w-full h-[45vh] md:h-[55vh] flex items-center justify-center px-6'>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl text-center text-white"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
            <ShoppingBag size={14} />
            <span className="text-xs font-medium">Shop by Category</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4 capitalize">
            {categoryName} Collection
          </h1>
          
          <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Browse products in <span className="capitalize font-semibold text-blue-400">{categoryName}</span> and discover items that match your style,
            needs, and budget. ShopZone makes it easy to find exactly what you're
            looking for in one place.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 inline-flex items-center gap-2 px-6 py-2 bg-[#1E3A8A]/80 backdrop-blur-sm rounded-full"
          >
            <Package size={16} />
            <span className="text-sm font-medium capitalize">{categoryData.length} Products Available</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 sticky top-[72px] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1E3A8A] transition flex items-center gap-1">
              <Home size={14} />
              Home
            </Link>
            <ChevronRight size={12} />
            <Link to="/shop" className="hover:text-[#1E3A8A] transition">
              Shop
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#1E3A8A] font-medium capitalize">{categoryName}</span>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Header with Count */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Sparkles size={24} className="text-[#1E3A8A]" />
              {categoryName} Products
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Showing {categoryData.length} product{categoryData.length !== 1 ? 's' : ''} in {categoryName}
            </p>
          </div>
          
          {/* Filter/Sort Placeholder */}
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 hover:border-[#1E3A8A] hover:text-[#1E3A8A] transition-colors">
            <Filter size={14} />
            Filter & Sort
          </button>
        </div>

        {/* Products Grid */}
        {categoryData.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-8"
          >
            {categoryData.map((item, index) => (
              <motion.div
                key={item._id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ECommerceCard product={item} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-lg p-12 text-center"
          >
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No products found
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Currently, there are no products in the <span className="capitalize font-medium text-[#1E3A8A]">{categoryName}</span> category. 
              Try exploring other categories at ShopZone.
            </p>
            <Link 
              to="/shop" 
              className="inline-block mt-6 px-6 py-2.5 bg-[#1E3A8A] text-white rounded-xl hover:bg-[#2E4A9A] transition-colors"
            >
              Browse All Products
            </Link>
          </motion.div>
        )}
      </div>
      
      {/* Newsletter Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;