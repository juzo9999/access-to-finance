import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet";
import { Toaster } from "react-hot-toast";
import { usePageTracking } from "./utils/analytics"; // ✅ Analytics tracking

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);
