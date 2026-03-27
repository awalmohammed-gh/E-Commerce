import React, { useMemo } from "react";
import { useECommerce } from "../../context/ECommerceProvider";
import ECommerceCard from "../card/ECommerceCard";
import { TrendingUp, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const Bestseller = () => {
  const { products } = useECommerce();

  const bestsellerData = useMemo(() => {
    return products.filter((item) => item.bestseller === true).slice(0, 8);
  }, [products]);

  return (
    <section className="mt-10 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1E3A8A]/10 rounded-full mb-4"
        >
          <TrendingUp className="w-4 h-4 text-[#1E3A8A]" />
          <span className="text-xs font-medium text-[#1E3A8A] uppercase tracking-wide">
            Hot This Week
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
        >
          Bestseller of the Week
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-20 h-1 bg-linear-to-r from-[#1E3A8A] to-blue-400 mx-auto mb-4 origin-left"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-600 max-w-2xl mx-auto text-base"
        >
          Top picks our customers can't get enough of. Shop the best-selling
          products of the week before they're gone.
        </motion.p>
      </div>

      {/* Products Grid */}
      {bestsellerData.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
          <Sparkles className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-400 text-lg">
            No bestseller products available at the moment.
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Check back soon for our top picks!
          </p>
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {bestsellerData.map((item) => (
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
      )}
    </section>
  );
};

export default Bestseller;