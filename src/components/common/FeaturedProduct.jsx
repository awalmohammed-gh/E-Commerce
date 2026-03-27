import { Flame } from 'lucide-react';
import { useECommerce } from '../../context/ECommerceProvider';
import ECommerceCard from '../card/ECommerceCard';
import { motion } from 'motion/react';
import { useMemo } from 'react';

const FeaturedProduct = () => {
  const { products } = useECommerce();

  const featuredData = useMemo(() =>{
    return [...products].sort(() => 0.5 - Math.random()).slice(4,12)
  },[products])

  return (
    <div className="py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1E3A8A]/10 rounded-full mb-4"
        >
          <Flame className="w-4 h-4 text-red-600" />
          <span className="text-xs font-medium text-[#1E3A8A] uppercase tracking-wide">
            Hot Products
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
        >
          Top Picks for You
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-20 h-1 bg-gradient-to-r from-[#1E3A8A] to-blue-400 mx-auto mb-4 origin-left"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-600 max-w-2xl mx-auto text-base"
        >
          Explore our featured collection of customer-loved products. Reliable, high-quality, and ready to enhance your everyday routine.
        </motion.p>
      </div>

      {/* Products Grid */}
      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {featuredData.map((item) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ECommerceCard product={item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturedProduct;