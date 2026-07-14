import { useState } from "react";
import { reviewCode } from "../../services/reviewService";

function ReviewForm({ setReview }) {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    setLoading(true);

    const response = await reviewCode("Python", code);

    setReview(response);

    setCode("");
  } catch (error) {
    console.error(error);

    alert("Failed to review code.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="review-form-card">
      <h2>Submit Your Code</h2>

      <p>
        Paste your source code below and let AI analyze your coding style,
        quality and best practices.
      </p>

      <form onSubmit={handleSubmit}>
        <textarea
          value={code}
          onChange={handleChange}
          placeholder="Paste your source code here..."
        />

        <div className="form-footer">
          <span>{code.length} Characters</span>

          <button
  type="submit"
  className="btn"
  disabled={!code.trim() || loading}
>
  {loading ? "Analyzing..." : "Analyze Code"}
</button>
        </div>
      </form>
    </section>
  );
}

export default ReviewForm;