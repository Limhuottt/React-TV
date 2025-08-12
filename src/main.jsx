import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Find the root element in the HTML
const rootElement = document.getElementById("root");

// Create a React root and render the App component inside StrictMode
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
