import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useECommerce } from '../context/ECommerceProvider';
import { motion } from "motion/react";
import ECommerceCard from '../components/card/ECommerceCard';
import Newsletter from '../components/common/Newsletter';

const CategoryPage = () => {
  const { category } = useParams();
  const { products } = useECommerce();

  const categoryData = useMemo(() => {
    return products.filter(
      (item) => item?.category?.toLowerCase() === category.toLowerCase()
    );
  }, [category, products]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className='relative bg-[url("/shopBg.jpg")] bg-cover bg-center bg-no-repeat w-full h-[40vh] md:h-[50vh] flex items-center justify-center px-6'>
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl text-center text-white"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Shop by Category
          </h1>
          <p className="text-sm md:text-lg text-gray-200 leading-relaxed mb-6">
            Browse products in <span className="capitalize font-semibold">{category === "kid" ? "Kids" : category}</span> and discover items that match your style,
            needs, and budget. ShopZone makes it easy to find exactly what you’re
            looking for in one place.
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-4xl font-bold text-blue-500 mt-4 tracking-widest capitalize"
          >
            {category === "kid" ? "Kids" : category}
          </motion.h2>
        </motion.div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {categoryData.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-8"
          >
            {categoryData.map((item) => (
              <motion.div
                key={item._id}
                layout
                initial={{ opacity: 0, y: 20 }}
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
              Currently, there are no products in the <span className="capitalize font-medium">{category}</span> category. Try exploring other categories at ShopZone.
            </p>
          </div>
        )}
      </div>
      <div className='py-10'>
        <Newsletter/>
      </div>
    </div>
  );
};

export default CategoryPage;