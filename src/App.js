import React from "react";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const currentUser = true;
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={currentUser ? <Home /> : <Register />} />
        <Route
          path="/register"
          element={currentUser ? <Register /> : <Home />}
        />
        <Route path="/login" element={currentUser ? <Login /> : <Home />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route path="/single" element={currentUser ? <Single /> : <Login />} />
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
