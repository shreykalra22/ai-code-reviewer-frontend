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

const STARTER_CODE = {
  Python: `def main():
    print("Hello, World!")

if __name__ == "__main__":
    main()`,

  JavaScript: `function main() {
    console.log("Hello, World!");
}

main();`,

  TypeScript: `function main(): void {
    console.log("Hello, World!");
}

main();`,

  Java: `public class Main {

    public static void main(String[] args) {

    }

}`,

  C: `#include <stdio.h>

int main() {

    return 0;
}`,

  "C++": `#include <iostream>

using namespace std;

int main() {

    return 0;
}`,

  Go: `package main

import "fmt"

func main() {
    fmt.Println("Hello World")
}`,

  Rust: `fn main() {
    println!("Hello, world!");
}`,
};

function ReviewForm({ setReview }) {
  const [language, setLanguage] = useState("Python");
  const [code, setCode] = useState(STARTER_CODE.Python);
  const [loading, setLoading] = useState(false);

  const handleLanguageChange = (event) => {
    const selected = event.target.value;

    setLanguage(selected);
    setCode(STARTER_CODE[selected]);
  };

  const clearEditor = () => {
    setLanguage("Python");
    setCode(STARTER_CODE.Python);
    setReview(null);

    toast.success("Editor cleared!");
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success("Code copied!");
    } catch {
      toast.error("Failed to copy code.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const toastId = toast.loading("Analyzing your code...");

    try {
      setLoading(true);

      const response = await reviewCode(language, code);

      setReview(response);

      toast.success("Review completed!", {
        id: toastId,
      });
    } catch (error) {
      console.error(error);

      toast.dismiss(toastId);

      if (!error.response) {
        toast.error("Cannot connect to the server.");
      } else if (error.response.status === 503) {
        toast.error("Gemini AI service is unavailable.");
      } else if (error.response.status === 500) {
        toast.error("Internal server error.");
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
        quality, and best practices.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="language">
          Programming Language
        </label>

        <select
          id="language"
          value={language}
          disabled={loading}
          onChange={handleLanguageChange}
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
          height="450px"
          language={MONACO_LANGUAGES[language]}
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            fontSize: 15,
            minimap: {
              enabled: false,
            },
            automaticLayout: true,
            scrollBeyondLastLine: false,
            wordWrap: "on",
            tabSize: 4,
            readOnly: loading,
            fontFamily: "JetBrains Mono, Consolas, monospace",
            padding: {
              top: 16,
            },
          }}
        />

        <div className="form-footer">
          <div className="character-info">

  <span>
    {code.length} / 20000 Characters
  </span>

  <div className="progress-bar">

    <div
      className="progress-fill"
      style={{
        width: `${(code.length / 20000) * 100}%`,
      }}
    />

  </div>

</div>

          <div className="form-actions">
            <button
              type="button"
              className="secondary-btn"
              disabled={!code.trim()}
              onClick={copyCode}
            >
              📋 Copy Code
            </button>

            <button
              type="button"
              className="secondary-btn"
              disabled={!code.trim()}
              onClick={clearEditor}
            >
              🗑 Clear
            </button>

            <button
              type="submit"
              className="btn"
              disabled={!code.trim() || loading}
            >
              {loading ? "Analyzing..." : "Analyze Code"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ReviewForm;