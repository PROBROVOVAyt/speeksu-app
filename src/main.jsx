import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// Path "/"
import Home from "./Home";
// Path "/Auth/"
import LoginPage from "./Page/Auth/LoginPage";
import RegisterPage from "./Page/Auth/RegisterPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-slate-900 text-white h-screen">
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="auth">
          <Route index element={<LoginPage />} />
          <Route index path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);
