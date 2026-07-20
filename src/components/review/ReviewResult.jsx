import { useState } from "react";
import toast from "react-hot-toast";
import Editor from "@monaco-editor/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css";

import "./ReviewResult.css";

function ReviewResult({ review }) {
  const [copied, setCopied] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  if (!review) {
    return (
      <section className="review-result-card">
        <h2>AI Review Result</h2>
        <p>No review generated yet.</p>
      </section>
    );
  }

  const copyReview = async () => {
    try {
      await navigator.clipboard.writeText(review.review);

      setCopied(true);
      toast.success("Review copied!");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      toast.error("Failed to copy review.");
    }
  };
  const copyImprovedCode = async () => {
  try {
    await navigator.clipboard.writeText(review.improved_code);

    setCopiedCode(true);
    toast.success("Improved code copied!");

    setTimeout(() => {
      setCopiedCode(false);
    }, 2000);
  } catch (error) {
    toast.error("Failed to copy improved code.");
  }
};
const downloadCode=()=>{

const extension={
python:"py",
javascript:"js",
java:"java",
cpp:"cpp",
c:"c",
typescript:"ts"
};

const lang=(review.language||"txt").toLowerCase();

const ext=extension[lang]||"txt";

const code=review.improved_code
.replace(/^```[a-zA-Z]*\n/,"")
.replace(/```$/,"");

const blob=new Blob([code],{
type:"text/plain"
});

const url=URL.createObjectURL(blob);

const a=document.createElement("a");

a.href=url;

a.download=`improved_code.${ext}`;

a.click();

URL.revokeObjectURL(url);

toast.success("Code downloaded!");

}

  const getScoreLabel = (score) => {
    if (score >= 9) return "Excellent";
    if (score >= 7) return "Good";
    if (score >= 5) return "Average";
    return "Needs Improvement";
  };

  const getScoreClass = (score) => {
    if (score >= 9) return "excellent";
    if (score >= 7) return "good";
    if (score >= 5) return "average";
    return "poor";
  };

  return (
    <section className="review-result-card">
      <div className="review-header">
        <h2>AI Review</h2>

        <button
          className="copy-btn"
          onClick={copyReview}
        >
          {copied ? "Copied!" : "Copy Review"}
        </button>
      </div>

      {/* Score Card */}

      <div className={`score-card ${getScoreClass(review.score)}`}>
        <span className="score-label">
          Overall Score
        </span>

        <h1 className="score-value">
          {review.score}/10
        </h1>

        <span className="score-status">
          {getScoreLabel(review.score)}
        </span>
      </div>

      {/* Statistics */}

      <div className="review-stats">
        <div className="stat-box">
          <span className="stat-title">
            Language
          </span>

          <h3>{review.language || "--"}</h3>
        </div>

        <div className="stat-box">
          <span className="stat-title">
            Score
          </span>

          <h3>{review.score}/10</h3>
        </div>

        <div className="stat-box">
          <span className="stat-title">
            Status
          </span>

          <h3>Gemini AI</h3>
        </div>
      </div>

      {/* Strengths */}

      {review.strengths?.length > 0 && (
        <div className="review-section">
          <h3>Strengths</h3>

          <ul className="review-list strengths">
            {review.strengths.map((item, index) => (
              <li key={index}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {item}
                </ReactMarkdown>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Weaknesses */}

      {review.weaknesses?.length > 0 && (
        <div className="review-section">
          <h3>Weaknesses</h3>

          <ul className="review-list weaknesses">
            {review.weaknesses.map((item, index) => (
              <li key={index}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {item}
                </ReactMarkdown>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Suggestions */}

      {review.suggestions?.length > 0 && (
        <div className="review-section">
          <h3>Suggestions</h3>

          <ul className="review-list suggestions">
            {review.suggestions.map((item, index) => (
              <li key={index}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {item}
                </ReactMarkdown>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* AI Improved Code */}

{review.improved_code && (
  <div className="review-section">
    <div className="review-header">
      <h3>✨ AI Improved Version</h3>

      <div className="action-buttons">
  <button
    className="copy-btn"
    onClick={copyImprovedCode}
  >
    {copiedCode ? "Copied!" : "Copy Code"}
  </button>

  <button
    className="copy-btn"
    onClick={downloadCode}
  >
    Download
  </button>
</div>
    </div>

    <div className="review-markdown improved-code">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {review.improved_code}
      </ReactMarkdown>
    </div>
  </div>
)}

      {/* Detailed Review */}

      <div className="review-section">
        <h3>Detailed Feedback</h3>

        <div className="improved-editor">

<Editor
    height="500px"
    language={(review.language || "plaintext").toLowerCase()}
    value={
        review.improved_code
            ?.replace(/^```[a-zA-Z]*\n/, "")
            ?.replace(/```$/, "")
    }
    theme="vs-dark"
    options={{
        readOnly: true,
        minimap: {
            enabled: true
        },
        fontSize: 15,
        scrollBeyondLastLine: false,
        automaticLayout: true,
        wordWrap: "on",
        lineNumbers: "on",
        folding: true,
        renderWhitespace: "selection",
        tabSize: 4,
        smoothScrolling: true
    }}
/>

</div>
      </div>
    </section>
  );
}

export default ReviewResult;