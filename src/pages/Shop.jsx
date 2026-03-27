import React, { useState } from "react";
import { useECommerce } from "../context/ECommerceProvider";
import ECommerceCard from "../components/card/ECommerceCard";
import { motion, AnimatePresence } from "motion/react";
import AdvertTwo from "../components/card/AdvertTwo";
import Newsletter from "../components/common/Newsletter";
import { ListFilterPlus, X } from "lucide-react";

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
      <div className='relative bg-[url("/shopBg.jpg")] bg-cover bg-center bg-no-repeat w-full h-[40vh] md:h-[50vh] flex items-center justify-center px-6'>
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl text-center text-white"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Explore Products at ShopZone
          </h1>
          <p className="text-sm md:text-lg text-gray-200 leading-relaxed">
            Browse our wide range of quality products, filter by category or
            price, and discover the perfect items for your needs at ShopZone.
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-4xl font-bold text-blue-500 mt-4 tracking-widest"
          >
            SHOP
          </motion.h2>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setOpenFilter(true)}
            className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-3 rounded-xl shadow-sm text-gray-700 font-medium"
          >
            <ListFilterPlus size={18} />
            Filters
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Side - Desktop Filters */}
          <div className="hidden lg:block lg:col-span-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear All
              </button>
            </div>

            {/* Category */}
            <div className="mb-8">
              <h3 className="text-base font-semibold text-gray-700 mb-4">
                Categories
              </h3>

              <div className="space-y-3">
                {uniqueCategories.map((cat, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      name="category"
                      onChange={() => handleCategoryChange(cat)}
                      type="checkbox"
                      checked={category.includes(cat)}
                      className="w-4 h-4 accent-black rounded"
                    />
                    <span className="capitalize text-gray-600 group-hover:text-black transition">
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="text-base font-semibold text-gray-700 mb-4">
                Price Range
              </h3>

              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="priceRange"
                    checked={selectedPrice === "All"}
                    onChange={() => {
                      setMinPrice(0);
                      setMaxPrice(1500);
                      setSelectedPrice("All");
                    }}
                    className="w-4 h-4 accent-black"
                  />
                  <span className="text-gray-600 group-hover:text-black transition">
                    All Prices
                  </span>
                </label>

                {priceRange.map((price, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-3 cursor-pointer group"
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
                      className="w-4 h-4 accent-black"
                    />
                    <span className="text-gray-600 group-hover:text-black transition">
                      GHS {price}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Products */}
          <div className="lg:col-span-3">
            {/* Top Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-3">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Shop Products
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Showing {filteredShop.length} product
                  {filteredShop.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 shadow-sm">
                Selected Category:{" "}
                <span className="font-medium text-black">
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
                {filteredShop.map((item) => (
                  <motion.div
                    key={item._id}
                    layout
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ECommerceCard product={item} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Try changing your category or price filter to see more
                  products available in ShopZone.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {openFilter && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenFilter(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-xl p-6 overflow-y-auto lg:hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
                <button onClick={() => setOpenFilter(false)}>
                  <X className="text-gray-700" />
                </button>
              </div>

              <button
                onClick={clearFilters}
                className="mb-6 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear All Filters
              </button>

              {/* Category */}
              <div className="mb-8">
                <h3 className="text-base font-semibold text-gray-700 mb-4">
                  Categories
                </h3>

                <div className="space-y-3">
                  {uniqueCategories.map((cat, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        name="mobile-category"
                        onChange={() => handleCategoryChange(cat)}
                        type="checkbox"
                        checked={category.includes(cat)}
                        className="w-4 h-4 accent-black rounded"
                      />
                      <span className="capitalize text-gray-600 group-hover:text-black transition">
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-base font-semibold text-gray-700 mb-4">
                  Price Range
                </h3>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="mobile-priceRange"
                      checked={selectedPrice === "All"}
                      onChange={() => {
                        setMinPrice(0);
                        setMaxPrice(1500);
                        setSelectedPrice("All");
                      }}
                      className="w-4 h-4 accent-black"
                    />
                    <span className="text-gray-600 group-hover:text-black transition">
                      All Prices
                    </span>
                  </label>

                  {priceRange.map((price, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 cursor-pointer group"
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
                        className="w-4 h-4 accent-black"
                      />
                      <span className="text-gray-600 group-hover:text-black transition">
                        GHS {price}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Sections */}
      <div className="my-20 space-y-6">
        <AdvertTwo />
        <Newsletter />
      </div>
    </div>
  );
};

export default Shop;