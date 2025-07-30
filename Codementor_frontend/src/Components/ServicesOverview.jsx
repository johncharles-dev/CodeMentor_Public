import React from "react";
import { motion } from "framer-motion";
import SharedBackground from "../components/SharedBackground";
import {
  Code,
  Wrench,
  FileText,
  RefreshCcw,
  CheckCircle,
  BookOpen,
  Globe,
} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const services = [
  { name: "Code Debugger", desc: "Fix errors quickly and efficiently", icon: Code },
  { name: "Code Optimization", desc: "Boost your code's performance", icon: Wrench },
  { name: "Code Documentation", desc: "Auto-generate helpful documentation", icon: FileText },
  { name: "Code Refactoring", desc: "Clean up and simplify your code", icon: RefreshCcw },
  { name: "Code Review", desc: "Get smart AI-driven feedback", icon: CheckCircle },
  { name: "Code Explainer", desc: "Understand complex code in seconds", icon: BookOpen },
  { name: "Multi-Language Translator", desc: "Convert Python, C++, Java, JS & more", icon: Globe },
];

const ServicesOverview = () => {
  return (
    <motion.section
      className="relative z-10 min-h-screen overflow-hidden bg-black text-white pt-6 sm:pt-16 pb-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <SharedBackground />

      <motion.div
        className="max-w-7xl mx-auto text-center mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
      >
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Code Services. Reinvented.
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Smart, AI-powered tools to improve your coding experience from start to finish.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-md
                       transition-transform duration-300 ease-out will-change-transform
                       hover:scale-[1.07] hover:-translate-y-1 hover:border-white/20 hover:shadow-white/10"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-white/10 text-white shadow-inner">
                <service.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{service.name}</h3>
            </div>
            <p className="text-sm text-gray-300">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ServicesOverview;
