import React, { useState } from "react";
import { useECommerce } from "../context/ECommerceProvider";
import ECommerceCard from "../components/card/ECommerceCard";
import { motion, AnimatePresence } from "motion/react";
import AdvertTwo from "../components/card/AdvertTwo";
import Newsletter from "../components/common/Newsletter";
import { 
  ListFilterPlus, 
  X, 
  ShoppingBag, 
  ChevronRight,
  Filter,
  Sparkles,
  Tag,
  SlidersHorizontal
} from "lucide-react";

const Shop = () => {
  const { products } = useECommerce();
  const [category, setCategory] = useState(["All"]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1500);
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [openFilter, setOpenFilter] = useState(false);

  const uniqueCategories = ["All", ...new Set(products.map((p) => p.category))];
  const priceRange = [];

  for (let i = 0; i < 700; i += 100) {
    priceRange.push(`${i} - ${i + 100}`);
  }

  const filteredShop = products.filter((item) => {
    const matchesCategory =
      category.includes("All") || category.includes(item.category);

    const matchesPrice =
      item.new_price >= minPrice && item.new_price <= maxPrice;

    return matchesCategory && matchesPrice;
  });

  const handleCategoryChange = (cat) => {
    if (cat === "All") {
      setCategory(["All"]);
      return;
    }

    let updatedCategories = [...category];

    if (updatedCategories.includes("All")) {
      updatedCategories = [];
    }

    if (updatedCategories.includes(cat)) {
      updatedCategories = updatedCategories.filter((item) => item !== cat);
    } else {
      updatedCategories.push(cat);
    }

    if (updatedCategories.length === 0) {
      updatedCategories = ["All"];
    }

    setCategory(updatedCategories);
  };

  const clearFilters = () => {
    setCategory(["All"]);
    setMinPrice(0);
    setMaxPrice(1500);
    setSelectedPrice("All");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Banner */}
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
            <span className="text-xs font-medium">Shop Collection</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Explore Products at ShopZone
          </h1>
          
          <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Browse our wide range of quality products, filter by category or
            price, and discover the perfect items for your needs at ShopZone.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 inline-flex items-center gap-2 px-6 py-2 bg-[#1E3A8A]/80 backdrop-blur-sm rounded-full"
          >
            <Tag size={16} />
            <span className="text-sm font-medium">{products.length} Products Available</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setOpenFilter(true)}
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 px-4 py-3 rounded-xl shadow-sm text-gray-700 font-medium hover:border-[#1E3A8A] hover:text-[#1E3A8A] transition-colors"
          >
            <SlidersHorizontal size={18} />
            Filter Products
            {category.length > 1 && (
              <span className="ml-1 bg-[#1E3A8A] text-white text-xs px-2 py-0.5 rounded-full">
                {category.length - 1}
              </span>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Side - Desktop Filters */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 h-fit sticky top-24">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Filter size={18} className="text-[#1E3A8A]" />
                  <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
                </div>
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#1E3A8A] hover:text-[#2E4A9A] font-medium transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Category */}
              <div className="mb-8">
                <h3 className="text-base font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <div className="w-1 h-4 bg-[#1E3A8A] rounded-full"></div>
                  Categories
                </h3>

                <div className="space-y-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                  {uniqueCategories.map((cat, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 cursor-pointer group hover:bg-gray-50 p-1 rounded-lg transition-colors"
                    >
                      <input
                        onChange={() => handleCategoryChange(cat)}
                        type="checkbox"
                        checked={category.includes(cat)}
                        className="w-4 h-4 rounded border-gray-300 text-[#1E3A8A] focus:ring-[#1E3A8A] focus:ring-offset-0"
                      />
                      <span className="capitalize text-gray-600 group-hover:text-[#1E3A8A] transition-colors text-sm">
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-base font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <div className="w-1 h-4 bg-[#1E3A8A] rounded-full"></div>
                  Price Range (GHS)
                </h3>

                <div className="space-y-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                  <label className="flex items-center gap-3 cursor-pointer group hover:bg-gray-50 p-1 rounded-lg transition-colors">
                    <input
                      type="radio"
                      name="priceRange"
                      checked={selectedPrice === "All"}
                      onChange={() => {
                        setMinPrice(0);
                        setMaxPrice(1500);
                        setSelectedPrice("All");
                      }}
                      className="w-4 h-4 text-[#1E3A8A] focus:ring-[#1E3A8A] focus:ring-offset-0"
                    />
                    <span className="text-gray-600 group-hover:text-[#1E3A8A] transition-colors text-sm">
                      All Prices
                    </span>
                  </label>

                  {priceRange.map((price, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 cursor-pointer group hover:bg-gray-50 p-1 rounded-lg transition-colors"
                    >
                      <input
                        name="priceRange"
                        type="radio"
                        checked={selectedPrice === price}
                        onChange={() => {
                          const [min, max] = price.split(" - ").map(Number);
                          setMinPrice(min);
                          setMaxPrice(max);
                          setSelectedPrice(price);
                        }}
                        className="w-4 h-4 text-[#1E3A8A] focus:ring-[#1E3A8A] focus:ring-offset-0"
                      />
                      <span className="text-gray-600 group-hover:text-[#1E3A8A] transition-colors text-sm">
                        GHS {price}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Active Filters */}
              {category.length > 1 && (
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-medium text-gray-500 mb-2">Active Filters:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.filter(c => c !== "All").map((cat, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-[#1E3A8A] text-xs rounded-full">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Products */}
          <div className="lg:col-span-3">
            {/* Top Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Sparkles size={24} className="text-[#1E3A8A]" />
                  Shop Products
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Showing {filteredShop.length} product{filteredShop.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 shadow-sm">
                <span className="font-medium">Categories:</span>{" "}
                <span className="text-[#1E3A8A] font-medium">
                  {category.join(", ")}
                </span>
              </div>
            </div>

            {/* Products Grid */}
            {filteredShop.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {filteredShop.map((item, index) => (
                  <motion.div
                    key={item._id}
                    layout
                    initial={{ opacity: 0, y: 25 }}
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
                  <ShoppingBag size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Try changing your category or price filter to see more
                  products available in ShopZone.
                </p>
                <button
                  onClick={clearFilters}
                  className="inline-block mt-6 px-6 py-2.5 bg-[#1E3A8A] text-white rounded-xl hover:bg-[#2E4A9A] transition-colors"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {openFilter && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenFilter(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl overflow-y-auto lg:hidden"
            >
              <div className="sticky top-0 bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Filter size={18} className="text-[#1E3A8A]" />
                  <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
                </div>
                <button 
                  onClick={() => setOpenFilter(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={18} className="text-gray-600" />
                </button>
              </div>

              <div className="p-5">
                <button
                  onClick={() => {
                    clearFilters();
                    setOpenFilter(false);
                  }}
                  className="w-full mb-6 py-2.5 text-sm bg-gray-100 text-[#1E3A8A] font-medium rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Clear All Filters
                </button>

                {/* Category */}
                <div className="mb-8">
                  <h3 className="text-base font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    <div className="w-1 h-4 bg-[#1E3A8A] rounded-full"></div>
                    Categories
                  </h3>

                  <div className="space-y-3">
                    {uniqueCategories.map((cat, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-3 cursor-pointer group py-1"
                      >
                        <input
                          onChange={() => handleCategoryChange(cat)}
                          type="checkbox"
                          checked={category.includes(cat)}
                          className="w-4 h-4 rounded border-gray-300 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                        />
                        <span className="capitalize text-gray-600 group-hover:text-[#1E3A8A] transition-colors text-sm">
                          {cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <h3 className="text-base font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    <div className="w-1 h-4 bg-[#1E3A8A] rounded-full"></div>
                    Price Range (GHS)
                  </h3>

                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group py-1">
                      <input
                        type="radio"
                        name="mobile-priceRange"
                        checked={selectedPrice === "All"}
                        onChange={() => {
                          setMinPrice(0);
                          setMaxPrice(1500);
                          setSelectedPrice("All");
                        }}
                        className="w-4 h-4 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                      />
                      <span className="text-gray-600 group-hover:text-[#1E3A8A] transition-colors text-sm">
                        All Prices
                      </span>
                    </label>

                    {priceRange.map((price, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-3 cursor-pointer group py-1"
                      >
                        <input
                          name="mobile-priceRange"
                          type="radio"
                          checked={selectedPrice === price}
                          onChange={() => {
                            const [min, max] = price.split(" - ").map(Number);
                            setMinPrice(min);
                            setMaxPrice(max);
                            setSelectedPrice(price);
                          }}
                          className="w-4 h-4 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                        />
                        <span className="text-gray-600 group-hover:text-[#1E3A8A] transition-colors text-sm">
                          GHS {price}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  onClick={() => setOpenFilter(false)}
                  className="w-full mt-8 py-3 bg-[#1E3A8A] text-white font-semibold rounded-xl hover:bg-[#2E4A9A] transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Sections */}
      <div className="mt-12 space-y-12">
        <AdvertTwo />
        <Newsletter />
      </div>

    </div>
  );
};

export default Shop;