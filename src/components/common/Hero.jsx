import { motion } from "motion/react";
import { ShoppingBag, ArrowRight, Sparkles, Truck, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();
  return (
    <div className="bg-[url('/banner2.jpg')] w-full h-[70vh] sm:h-[85vh] flex items-center justify-center bg-no-repeat bg-cover bg-center relative">
      
      {/* Overlay */}
      <div className="bg-gradient-to-r from-black/70 via-black/60 to-black/70 inset-0 absolute"></div>

      {/* Content */}
      <div className="text-center max-w-5xl px-4 space-y-6 text-white relative z-10">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
        >
          <Sparkles size={14} className="text-yellow-400" />
          <span className="text-xs sm:text-sm font-medium">Welcome to ShopZone</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight"
        >
          Shop Smart. <br className="hidden sm:block" />
          <span className="text-blue-400">Live Better.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed"
        >
          Discover quality products at the best prices. From everyday essentials
          to trending items, we bring you a seamless shopping experience with
          fast delivery and trusted service.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1E3A8A] hover:bg-[#2E4A9A] transition-all duration-200 px-8 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <ShoppingBag size={18} />
            Shop Now
            <ArrowRight size={16} />
          </motion.button>

          <motion.button
            onClick={() => navigate("/about")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white/30 hover:bg-white/10 transition-all duration-200 px-8 py-3 rounded-xl font-semibold"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;