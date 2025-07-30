import React, { useState } from "react";
import TextArea from "../components/TextArea";
import TextResponse from "../components/TextResponse";
import { fetchCodeService } from "../utils/api"; // ✅ Add this import

const Refactoring = () => {
  const [refactoredCode, setRefactoredCode] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");

  const handleRefactor = async (code) => {
    setRefactoredCode("");
    setLoadingMessage("Refactoring your code...");

    const result = await fetchCodeService("http://localhost:5014/api/refactoring", code);
    setRefactoredCode(result);
    setLoadingMessage("");
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 text-white bg-black">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Code Refactoring</h1>
        <p className="text-gray-400">
          Transform your code into a cleaner, more maintainable version.
        </p>
      </div>

      <TextArea onSubmit={handleRefactor} buttonLabel="Refactor Code" />

      {(refactoredCode || loadingMessage) && (
        <TextResponse response={refactoredCode} loadingMessage={loadingMessage} />
      )}
    </div>
  );
};

export default Refactoring;
