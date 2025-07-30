import React, { useEffect, useState, useRef } from "react";
import { Copy, Loader2 } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// 💡 Typing mode toggle: 0 = instant, 1 = animate
const typingToggle = "11"; // [0] for text, [1] for code

// Detect code blocks wrapped in triple backticks
const parseResponse = (text) => {
  const regex = /```(\w+)?\n([\s\S]*?)```/g;
  let match;
  const parts = [];
  let lastIndex = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "text", content: text.slice(lastIndex, match.index) });
    }
    parts.push({ type: "code", language: match[1] || "plaintext", content: match[2] });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push({ type: "text", content: text.slice(lastIndex) });
  }

  return parts;
};

const TextResponse = ({ response = "", loadingMessage = "Processing..." }) => {
  const [parsedResponse, setParsedResponse] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [boxHeight, setBoxHeight] = useState(300); // Initial height

  useEffect(() => {
    if (!response) {
      setParsedResponse([]);
      setIsLoaded(false);
      return;
    }

    setParsedResponse(parseResponse(response));
    setIsLoaded(true);
  }, [response]);

  const handleCopy = (text) => navigator.clipboard.writeText(text);

  const handleResize = (e) => {
    setBoxHeight(Math.max(200, e.clientY - e.target.getBoundingClientRect().top));
  };

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
      <div
        className="relative rounded-lg bg-[#18181A] text-white border border-white/10 p-4 text-sm font-mono overflow-auto whitespace-pre-wrap scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent resize-y"
        style={{ height: boxHeight }}
        onMouseDown={(e) => e.target.classList.contains('resize-handle') && e.preventDefault()}
        onMouseMove={(e) => e.buttons === 1 && handleResize(e)}
      >
        {!response ? (
          <div className="p-8 flex flex-col justify-center items-center h-40 text-gray-400 gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>{loadingMessage}</span>
          </div>
        ) : (
          parsedResponse.map((part, index) => (
            part.type === "code" ? (
              <div key={index} className="relative bg-[#282C34] text-white border border-white/20 p-4 rounded-lg my-2">
                <span className="absolute top-1 left-2 text-xs text-gray-400">{part.language}</span>
                <button
                  onClick={() => handleCopy(part.content)}
                  className="absolute top-1 right-2 text-white/50 hover:text-white p-1 rounded transition"
                  title="Copy to clipboard"
                >
                  <Copy size={16} />
                </button>
                <SyntaxHighlighter
                  language={part.language}
                  style={oneDark}
                  showLineNumbers
                  customStyle={{
                    background: "transparent",
                    fontSize: "0.875rem",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {part.content}
                </SyntaxHighlighter>
              </div>
            ) : (
              <p key={index} className="whitespace-pre-wrap">{part.content}</p>
            )
          ))
        )}
        <div className="resize-handle h-2 bg-gray-600 cursor-ns-resize mt-2"></div>
      </div>
    </div>
  );
};

export default TextResponse;
