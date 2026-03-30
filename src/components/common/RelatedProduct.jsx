import React, { useMemo } from 'react'
import { useECommerce } from '../../context/ECommerceProvider'
import ECommerceCard from '../card/ECommerceCard';
import { motion } from 'motion/react';

const RelatedProduct = ({ category }) => {
  const { products } = useECommerce();

  const relatedProduct = useMemo(() => {
    return products.filter((product) => product.category === category).slice(0, 4);
  }, [products, category]);

  return (
    <div className="my-12 px-4 sm:px-8">
      {/* Heading */}
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        You May Like This
      </motion.h2>

      {/* Subheading / Description */}
      <motion.p
        className="text-gray-500 text-sm md:text-base text-center mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Based on your selection, here are some similar products you might be interested in. Discover more options in this category.
      </motion.p>

      {/* Products Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-8"
      >
        {relatedProduct.length > 0 ? (
          relatedProduct.map((product) => (
            <motion.div
              key={product._id}
              layout
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <ECommerceCard product={product} />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-10">
            No related products found.
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default RelatedProduct;