import React from "react";
import { motion } from "motion/react";

const Advert = () => {
  return (
    <div className="bg-[url('/banner3.jpg')] w-full h-[50vh] sm:h-[60vh] flex items-center justify-center bg-no-repeat bg-cover relative mt-10">
      {/* Overlay */}
      <div className="bg-black/60 absolute inset-0"></div>

      {/* Content */}
      <div className="text-center text-white z-10 px-4 sm:px-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4"
        >
          Upgrade Your Everyday
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto"
        >
          From essentials to trending items, we bring you quality products that
          make life easier, faster, and more stylish.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
};

export default Advert;