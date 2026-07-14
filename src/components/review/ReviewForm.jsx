import { useState } from "react";

function ReviewForm() {
  const [code, setCode] = useState("");

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(code);
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
            disabled={!code.trim()}
          >
            Analyze Code
          </button>
        </div>
      </form>
    </section>
  );
}

export default ReviewForm;