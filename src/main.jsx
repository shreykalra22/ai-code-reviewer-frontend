import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App";

import "./styles/global.css";
import "./styles/variables.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/animations.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        toastOptions={{
          duration: 3500,

          style: {
            background: "#1f2937",
            color: "#fff",
            border: "1px solid #3b82f6",
            borderRadius: "12px",
            padding: "14px 18px",
            fontSize: "14px",
          },

          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },

          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <App />
    </>
  </React.StrictMode>
);