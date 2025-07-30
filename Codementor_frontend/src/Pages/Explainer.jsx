import React, { useState } from "react";
import TextArea from "../components/TextArea";
import TextResponse from "../components/TextResponse";
import { fetchCodeService } from "../utils/api";

const Explainer = () => {
  const [explanation, setExplanation] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");

  const handleExplain = async (code) => {
    setExplanation("");
    setLoadingMessage("Explaining your code...");

    const result = await fetchCodeService("http://localhost:5016/api/explain", code);
    setExplanation(result);
    setLoadingMessage("");
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 text-white bg-black">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Code Explainer</h1>
        <p className="text-gray-400">
        Confused by complex code? Get an easy-to-understand explanation powered by AI.
        </p>
      </div>

      <TextArea onSubmit={handleExplain} buttonLabel="Explain Code" />

      {(explanation || loadingMessage) && (
        <TextResponse response={explanation} loadingMessage={loadingMessage} />
      )}
    </div>
  );
};

export default Explainer;
