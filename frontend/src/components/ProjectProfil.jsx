/* eslint-disable react/prop-types */
import React from "react";
import "./ProjectProfil.css";

export default function ProjectProfil({ data }) {
  return (
    <div>
      <div className="profilecardcontainer">
        <div className="projectProfile">
          <h1>{data?.projectName}</h1>
        </div>
      </div>
    </div>
  );
}
