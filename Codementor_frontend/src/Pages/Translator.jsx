import React, { useState } from "react";
import TextArea from "../components/TextArea";
import TextResponse from "../components/TextResponse";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const languages = ["Python", "C++", "Java"];

const dropdownAnim = {
  initial: { opacity: 0, y: -8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.2, ease: "easeOut" },
};

const Translator = () => {
  const [sourceLang, setSourceLang] = useState("C++");
  const [targetLang, setTargetLang] = useState("Python");
  const [translatedCode, setTranslatedCode] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");

  const [openSource, setOpenSource] = useState(false);
  const [openTarget, setOpenTarget] = useState(false);

  const handleTranslate = async (code) => {
    setTranslatedCode("");
    setLoadingMessage("Translating your code...");

    try {
      const response = await fetch("http://localhost:5011/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, sourceLang, targetLang }),
      });

      const data = await response.text();
      setTranslatedCode(data);
    } catch (err) {
      setTranslatedCode("// Translation failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 text-white bg-black">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Code Translator</h1>
        <p className="text-gray-400">
          Translate your code from one language to another with ease.
        </p>
      </div>

      {/* Dropdown Menus */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
        {/* Source Language Dropdown */}
        <div
          className="relative w-44"
          onMouseEnter={() => setOpenSource(true)}
          onMouseLeave={() => setOpenSource(false)}
        >
          <button
            className="w-full flex items-center justify-between bg-[#1A1A1A] text-white px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition"
          >
            {sourceLang}
            <ChevronDown
              className={`transition-transform ${openSource ? "rotate-180" : ""}`}
              size={18}
            />
          </button>
          <AnimatePresence>
            {openSource && (
              <motion.div
                {...dropdownAnim}
                className="absolute mt-2 w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg shadow z-10"
              >
                {languages.map((lang) => (
                  <div
                    key={lang}
                    onClick={() => {
                      setSourceLang(lang);
                      setOpenSource(false);
                    }}
                    className="px-4 py-2 text-white hover:bg-white/10 cursor-pointer transition rounded"
                  >
                    {lang}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <p className="text-center text-sm text-white/40 mt-2">Source Language</p>
        </div>

        {/* Arrow */}
        <span className="text-white text-xl font-medium">→</span>

        {/* Target Language Dropdown */}
        <div
          className="relative w-44"
          onMouseEnter={() => setOpenTarget(true)}
          onMouseLeave={() => setOpenTarget(false)}
        >
          <button
            className="w-full flex items-center justify-between bg-[#1A1A1A] text-white px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition"
          >
            {targetLang}
            <ChevronDown
              className={`transition-transform ${openTarget ? "rotate-180" : ""}`}
              size={18}
            />
          </button>
          <AnimatePresence>
            {openTarget && (
              <motion.div
                {...dropdownAnim}
                className="absolute mt-2 w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg shadow z-10"
              >
                {languages.map((lang) => (
                  <div
                    key={lang}
                    onClick={() => {
                      setTargetLang(lang);
                      setOpenTarget(false);
                    }}
                    className="px-4 py-2 text-white hover:bg-white/10 cursor-pointer transition rounded"
                  >
                    {lang}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <p className="text-center text-sm text-white/40 mt-2">Target Language</p>
        </div>
      </div>

      {/* Code Input */}
      <TextArea onSubmit={handleTranslate} buttonLabel="Translate Code" />

      {/* Output */}
      {(translatedCode || loadingMessage) && (
        <TextResponse response={translatedCode} loadingMessage={loadingMessage} />
      )}
    </div>
  );
};

export default Translator;
