import React from "react";
import { Link } from "react-router-dom";
import "./Connexion.css";
import logo from "../assets/logo-apside-blanc.png";
import Motion from "../components/Motion";

function Connexion() {
  return (
    <div className="connexion-container">
      <Motion />
      <div className="div-logo-connexion">
        <img className="logo-connexion" src={logo} alt="logo apside bleu" />
      </div>
      <div className="div-link1">
        <Link to="/Login" className="log-button" style={{ color: "white" }}>
          CONNEXION
        </Link>
      </div>
      <div className="div-link2">
        <Link
          to="/Register"
          className="register-button"
          style={{ color: "white" }}
        >
          REGISTER
        </Link>
      </div>
    </div>
  );
}

export default Connexion;
