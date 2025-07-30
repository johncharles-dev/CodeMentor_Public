import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="relative bg-black h-[60vh] flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Glow Gradient Blob */}
      <div
        className="absolute m-auto blur-[160px] max-w-xs h-[13rem] top-12 inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #ffffff0d 0%, rgba(200,200,200,0.05) 20%, rgba(255,255,255,0.02) 100%)",
        }}
      />

      {/* CTA Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h2
          className="text-white text-3xl sm:text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Revolutionize Your Workflow with AI-Powered Code Services
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          CodeMentor helps you debug, optimize, translate, and refactor smarter — all in one place.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/explainer"
            className="px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-500 text-white font-medium hover:brightness-110 transition"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
