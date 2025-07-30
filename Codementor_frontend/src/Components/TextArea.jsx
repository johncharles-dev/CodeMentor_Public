import React, { useState } from "react";
import { Eraser, Upload } from "lucide-react";

const TextArea = ({ onSubmit, buttonLabel = "Submit Code" }) => {
  const [text, setText] = useState("");
  const maxLength = 3000;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    if (onSubmit) onSubmit(text);
  };

  const handleClear = () => setText("");

  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setText(event.target.result);
      reader.readAsText(file);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-0">
        {/* Top bar with icons */}
        <div className="flex justify-between items-center">
          <label htmlFor="input" className="font-semibold text-lg text-white">
            Paste your code
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleClear}
              className="text-gray-500 hover:text-red-500"
              title="Clear"
            >
              <Eraser size={18} />
            </button>
            <label className="cursor-pointer text-gray-500 hover:text-blue-500" title="Upload File">
              <Upload size={18} />
              <input type="file" accept=".js,.ts,.txt,.py,.java,.cpp" onChange={handleUpload} hidden />
            </label>
          </div>
        </div>

        {/* Textarea */}
        <textarea
          name="input"
          id="input"
          rows="10"
          maxLength={maxLength}
          required
          placeholder="Paste your code here... [Max 3000 characters]"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full rounded-lg p-4 font-mono text-sm text-white bg-black/5 border border-white/10 resize-none focus:outline-none focus:ring-2 focus:ring-gray-500/50"
        />

        {/* Character count */}
        <div className="text-right text-sm">
          <span className={`${text.length > 2800 ? "text-red-500" : "text-gray-500"}`}>
            {text.length} / {maxLength} characters
          </span>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={!text.trim() || text.length > maxLength}
          className="rounded-lg p-3 bg-white/10 border border-white/20 hover:bg-white/20 transition-colors text-white font-medium text-base flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="18" height="18" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
            />
          </svg>
          <span className="font-bold">{buttonLabel}</span>
        </button>
      </form>
    </div>
  );
};

export default TextArea;
