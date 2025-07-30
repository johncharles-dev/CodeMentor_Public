import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SharedBackground from "../components/SharedBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-start justify-center bg-black text-white">
    <SharedBackground />

    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 sm:py-20">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="flex justify-center lg:justify-start"
            >
              <span className="inline-flex items-center px-3 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-lg text-sm text-white/70">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2" />
                CodeMentor Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              <span className="inline-block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Build. Debug. Translate.
              </span>
              <span className="block mt-2 text-white">Smarter Code Starts Here</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              className="text-gray-400 max-w-xl mx-auto lg:mx-0"
            >
              AI-powered services to help you debug, optimize, and understand your code across multiple languages — fast, reliable, and beautifully dark.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              className="flex justify-center lg:justify-start"
            >
              <Link
                to="/explainer"
                className="group relative px-6 py-3 min-w-[160px] text-white font-medium rounded-lg bg-gradient-to-r from-gray-700 to-gray-500 hover:brightness-110 transition"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
            className="relative h-[500px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[350px] h-[350px] animate-morph">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/5 shadow-2xl rounded-[inherit]" />
                <div className="absolute inset-6 flex flex-col justify-between p-6 space-y-4">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-white/20 animate-pulse" />
                    <div className="h-2 w-24 bg-white/10 mt-4 rounded-full" />
                    <div className="h-2 w-32 bg-white/5 mt-2 rounded-full" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="h-8 w-24 bg-white/10 rounded-lg" />
                      <div className="h-2 w-16 bg-white/10 mt-2 rounded-full" />
                    </div>
                    <div className="h-14 w-14 bg-white/10 rounded-full animate-float" />
                  </div>
                  <div>
                    <div className="h-2 w-full bg-white/10 rounded-full" />
                    <div className="h-2 w-3/4 bg-white/20 mt-2 rounded-full" />
                  </div>
                </div>
              </div>
            </div> 
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
