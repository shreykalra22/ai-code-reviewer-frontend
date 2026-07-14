function ReviewResult({ review }) {
  return (
    <section className="review-result-card card">
      <h2>AI Review Result</h2>

      {!review ? (
        <p>No review generated yet.</p>
      ) : (
        <>
          <h3>Score: {review.score}/10</h3>

          <p>{review.review}</p>
        </>
      )}
    </section>
  );
}

export default ReviewResult;