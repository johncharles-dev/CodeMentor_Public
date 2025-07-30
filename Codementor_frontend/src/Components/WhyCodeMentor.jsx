import React from "react";
import { motion } from "framer-motion";
import SharedBackground from "../components/SharedBackground";
import { Zap, Brain, Globe2, Target } from "lucide-react";

const reasons = [
  {
    title: "Fast & Accurate",
    desc: "Get instant results with AI-precision and deep analysis.",
    icon: <Zap size={28} />,
  },
  {
    title: "Smarter Debugging",
    desc: "Understand the 'why' behind every fix, not just the what.",
    icon: <Brain size={28} />,
  },
  {
    title: "Multi-Language Support",
    desc: "Works seamlessly with Python, Java, C++, JavaScript & more.",
    icon: <Globe2 size={28} />,
  },
  {
    title: "Built for All Devs",
    desc: "Whether you're a student or a senior dev, it's for you.",
    icon: <Target size={28} />,
  },
];

const WhyCodeMentor = () => {
  return (
    <section className="relative z-10 py-20 px-6 sm:px-10 overflow-hidden text-white">
      <SharedBackground />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Why CodeMentor?</h2>
        <p className="text-gray-400 mb-12">
          A developer-first AI platform that brings speed, clarity, and power to your coding workflow.
        </p>

        <div className="space-y-12">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="bg-white/10 p-4 rounded-full mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 mt-2 max-w-md">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCodeMentor;
