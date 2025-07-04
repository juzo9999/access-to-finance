import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Content from "./pages/Content";
import PostDetail from "./pages/PostDetail";
import AdminEmailSender from "./pages/AdminEmailSender"; // ✅ Hidden page

function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/content" element={<Content />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/secret-admin" element={<AdminEmailSender />} /> {/* 🔐 Hidden route */}
      </Routes>
    </Router>
  );
}

export default App;