import React from "react";
import { Routes, Route } from "react-router-dom";
import Connexion from "./pages/Connexion";
import Home from "./pages/Home";
import AddProject from "./pages/AddProject";
import Project from "./pages/Project";
import Profile from "./pages/Profile";
import Login from "./components/Login";
import Register from "./components/Register";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addProject" element={<AddProject />} />
        <Route path="/project" element={<Project />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
