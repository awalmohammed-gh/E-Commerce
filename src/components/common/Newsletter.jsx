import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Send, CheckCircle, Sparkles } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("Subscribed email:", email);
    setIsSubmitted(true);
    setEmail("");
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="bg-[#F3F4F4] py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-[#1E3A8A]/10 rounded-full mb-6"
        >
          <Mail className="w-8 h-8 text-[#1E3A8A]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
        >
          Join Our Newsletter
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
          className="text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Stay updated with the latest products, exclusive offers, and special
          deals delivered straight to your inbox.
        </motion.p>

        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-5 h-5 text-green-500" />
            <p className="text-green-700 text-sm">Successfully subscribed! Check your inbox.</p>
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="relative w-full sm:flex-1">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all duration-200 bg-white"
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="bg-gradient-to-r from-[#1E3A8A] to-[#2E4A9A] hover:from-[#2E4A9A] hover:to-[#1E3A8A] text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <Send size={18} />
            Subscribe
          </motion.button>
        </motion.form>

        {/* Trust Badge */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs text-gray-400 mt-6 flex items-center justify-center gap-2"
        >
          <Sparkles size={12} />
          No spam, unsubscribe anytime
          <Sparkles size={12} />
        </motion.p>
      </div>
    </section>
  );
};

export default Newsletter;