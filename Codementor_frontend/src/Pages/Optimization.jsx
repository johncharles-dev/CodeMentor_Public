import React, { useState } from "react";
import TextArea from "../components/TextArea";
import TextResponse from "../components/TextResponse";
import { fetchCodeService } from "../utils/api";

const Optimization = () => {
  const [result, setResult] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");

  const handleOptimize = async (code) => {
    setResult("");
    setLoadingMessage("Optimizing code...");

    const optimized = await fetchCodeService("http://localhost:5012/api/optimize", code);
    setResult(optimized);
    setLoadingMessage("");
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 text-white bg-black">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Code Optimization</h1>
        <p className="text-gray-400">
          Improve the performance and readability of your code instantly.
        </p>
      </div>

      <TextArea onSubmit={handleOptimize} buttonLabel="Optimize" />

      {(result || loadingMessage) && (
        <TextResponse response={result} loadingMessage={loadingMessage} />
      )}
    </div>
  );
};

export default Optimization;
