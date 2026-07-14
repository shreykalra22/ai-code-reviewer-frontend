import toast from "react-hot-toast";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import { reviewCode } from "../../services/reviewService";
import "./ReviewForm.css";

const LANGUAGES = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "C",
  "C++",
  "Go",
  "Rust",
];
const MONACO_LANGUAGES = {
  Python: "python",
  JavaScript: "javascript",
  TypeScript: "typescript",
  Java: "java",
  C: "c",
  "C++": "cpp",
  Go: "go",
  Rust: "rust",
};

function ReviewForm({ setReview }) {
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("Python");
    const [loading, setLoading] = useState(false);
  

  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const toastId = toast.loading("Analyzing your code...");

      const response = await reviewCode(language, code);

      setReview(response);

toast.success("Review completed!", {
  id: toastId,
});

setCode("");
setLanguage("Python");
    } catch (error) {
  console.error(error);

  if (error.response?.status === 503) {
    toast.error("Gemini AI service is currently unavailable.");
  } else if (error.response?.status === 500) {
    toast.error("Server error while reviewing code.");
  } else {
    toast.error("Failed to review code.");
  }
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
        <label htmlFor="language">
          Programming Language
        </label>

        <select
          id="language"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        >
          {LANGUAGES.map((lang) => (
            <option
              key={lang}
              value={lang}
            >
              {lang}
            </option>
          ))}
        </select>

        <Editor
  height="400px"
  language={MONACO_LANGUAGES[language]}
  theme="vs-dark"
  value={code}
  onChange={(value) => setCode(value || "")}
  options={{
    fontSize: 15,
    minimap: {
      enabled: false,
    },
    scrollBeyondLastLine: false,
    automaticLayout: true,
    wordWrap: "on",
    tabSize: 4,
    fontFamily: "JetBrains Mono, Consolas, monospace",
    padding: {
      top: 16,
    },
  }}
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