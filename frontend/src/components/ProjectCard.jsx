/* eslint-disable react/prop-types */
import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({ data }) {
  return (
    <div>
      <div className="card-container">
        <div className="projectName">
          <h1>{data?.projectName}</h1>
        </div>
        <div className="projectOwner">
          <p>{`🧑 ${data?.owner}`}</p>
        </div>
        <div className="startDate">
          <p>{`📆 ${data?.startDate}`}</p>
        </div>
        <div className="projectOffice">
          <p>{`📍 ${data?.ownerOffice}`}</p>
        </div>
        <div className="description">
          <p>{data?.description}</p>
        </div>
      </div>
    </div>
  );
}
