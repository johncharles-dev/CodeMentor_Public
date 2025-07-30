import React, { useState } from "react";
import TextArea from "../components/TextArea";
import TextResponse from "../components/TextResponse";
import { fetchCodeService } from "../utils/api";

const Review = () => {
  const [reviewResult, setReviewResult] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");

  const handleReview = async (code) => {
    setReviewResult("");
    setLoadingMessage("Reviewing your code...");

    const result = await fetchCodeService("http://localhost:5015/api/review", code);
    setReviewResult(result);
    setLoadingMessage("");
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 text-white bg-black">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Code Review</h1>
        <p className="text-gray-400">
          Get expert feedback on your code quality, performance, and best practices.
        </p>
      </div>

      <TextArea onSubmit={handleReview} buttonLabel="Review Code" />

      {(reviewResult || loadingMessage) && (
        <TextResponse response={reviewResult} loadingMessage={loadingMessage} />
      )}
    </div>
  );
};

export default Review;
