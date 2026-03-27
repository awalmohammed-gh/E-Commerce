import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="bg-[url('/banner2.jpg')] w-full h-[70vh] sm:h-[85vh] flex items-center justify-center bg-no-repeat bg-cover relative">
      
      {/* Overlay */}
      <div className="bg-black/60 inset-0 absolute"></div>

      {/* Content */}
      <div className="text-center max-w-5xl px-4 space-y-6 text-white relative z-10 transition-all">
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-4xl lg:text-7xl font-bold"
        >
          Shop Smart. Live Better.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-lg"
        >
          Discover quality products at the best prices. From everyday essentials
          to trending items, we bring you a seamless shopping experience with
          fast delivery and trusted service.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-medium"
        >
          Shop Now
        </motion.button>

      </div>
    </div>
  );
};

export default Hero;