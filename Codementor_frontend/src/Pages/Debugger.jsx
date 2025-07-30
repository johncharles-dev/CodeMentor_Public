import React, { useState } from "react";
import TextArea from "../components/TextArea";
import TextResponse from "../components/TextResponse";
import { fetchCodeService } from "../utils/api";

const Debugger = () => {
  const [debugOutput, setDebugOutput] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");

  const handleDebug = async (code) => {
    setDebugOutput("");
    setLoadingMessage("Analyzing your code for bugs...");

    const result = await fetchCodeService("http://localhost:5010/api/debug", code);
    setDebugOutput(result);
    setLoadingMessage("");
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 text-white bg-black">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Code Debugger</h1>
        <p className="text-gray-400">
          Find bugs in your code, understand what's wrong, and get suggestions to fix it.
        </p>
      </div>

      <TextArea onSubmit={handleDebug} buttonLabel="Debug Code" />

      {(debugOutput || loadingMessage) && (
        <TextResponse response={debugOutput} loadingMessage={loadingMessage} />
      )}
    </div>
  );
};

export default Debugger;
