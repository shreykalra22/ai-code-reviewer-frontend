function ReviewForm() {
  return (
    <section>
      <h2>Submit Code</h2>

      <textarea
        rows="15"
        placeholder="Paste your source code here..."
      ></textarea>

      <br />

      <button>Review Code</button>
    </section>
  );
}

export default ReviewForm;