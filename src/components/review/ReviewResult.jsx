import "./ReviewResult.css";

function ReviewResult({ review }) {
  if (!review) {
    return (
      <section className="review-result-card">
        <h2>AI Review Result</h2>
        <p>No review generated yet.</p>
      </section>
    );
  }

  return (
    <section className="review-result-card">
      <h2>🤖 AI Review</h2>

      <div className="score-card">
        <span className="score-label">Overall Score</span>

        <h1 className="score-value">
          {review.score}/10
        </h1>
      </div>

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