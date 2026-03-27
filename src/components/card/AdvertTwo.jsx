import React from "react";
import { motion } from "motion/react";

const AdvertTwo = () => {
  return (
    <div className="bg-[url('/banner1.jpg')] w-full h-[50vh] sm:h-[60vh] flex items-center justify-center bg-no-repeat bg-cover relative mt-10">
      {/* Overlay */}
      <div className="bg-black/60 absolute inset-0"></div>

      {/* Content */}
      <div className="text-center text-white z-10 px-4 sm:px-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4"
        >
          Unbeatable Deals Await
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto"
        >
          Grab top-quality products at amazing prices. Limited stock, fast delivery, and items our customers love—shop before it’s gone!
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
};

export default AdvertTwo;
