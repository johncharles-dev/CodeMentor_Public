import React, { useState } from "react";
import TextArea from "../components/TextArea";
import TextResponse from "../components/TextResponse";
import { fetchCodeService } from "../utils/api";

const Documentation = () => {
  const [docResult, setDocResult] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");

  const handleGenerateDocs = async (code) => {
    setDocResult("");
    setLoadingMessage("Generating documentation...");

    const result = await fetchCodeService("http://localhost:5013/api/documentation", code);
    setDocResult(result);
    setLoadingMessage("");
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 text-white bg-black">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Code Documentation</h1>
        <p className="text-gray-400">
          Automatically generate clean and helpful documentation for your code.
        </p>
      </div>

      <TextArea onSubmit={handleGenerateDocs} buttonLabel="Generate Docs" />

      {(docResult || loadingMessage) && (
        <TextResponse response={docResult} loadingMessage={loadingMessage} />
      )}
    </div>
  );
};

export default Documentation;
