import { useState } from "react";
import toast from "react-hot-toast";

import "./ReviewResult.css";

function ReviewResult({ review }) {
  const [copied, setCopied] = useState(false);

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

      {/* -------- Review Statistics -------- */}

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

    <h3>Completed</h3>
  </div>

</div>

      {/* ------------------------------- */}

      <div className="review-section">
        <h3>Detailed Feedback</h3>

        <p className="review-text">
          {review.review}
        </p>
      </div>
    </section>
  );
}

export default ReviewResult;