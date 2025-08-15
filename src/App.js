// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import { usePageTracking } from "./utils/analytics";

import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Content from "./pages/Content";
import PostDetail from "./pages/PostDetail";
import AdminEmailSender from "./pages/AdminEmailSender"; // 🔐 Hidden route

function App() {
  usePageTracking(); // ✅ Tracks route changes for GA

  return (
    
    <div className="min-h-screen bg-[OB2E13] ">
      <Helmet>
        <title>Access to Finance – Prime Anchor</title>
        <meta name="description" content="Unlock funding opportunities with our Prime Anchor Finance Program." />
      </Helmet>

      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/content" element={<Content />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/secret-admin" element={<AdminEmailSender />} />
      </Routes>
    </div>
  );
}

export default App;