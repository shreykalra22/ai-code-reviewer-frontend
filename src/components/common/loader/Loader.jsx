import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>

      <h3>Analyzing your code...</h3>

      <p>
        Gemini AI is reviewing your source code.
      </p>
    </div>
  );
}

export default Loader;