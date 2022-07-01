/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import NavBar from "../components/NavBar";
import "./AddProject.css";

export default function AddProject() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [projectName, setProjectName] = useState("");
  const [crew, setCrew] = useState("");
  const [skills, setSkills] = useState("");
  const [departureDate, setDepartureDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmitForm = () => {
    swal({
      title: "Good job!",
      text: "Successfully send",
      icon: "success",
      confirmButtonText: "Done !",
    }).then(() => navigate("/home"));
  };

  return (
    <>
      <NavBar />
      <div className="AddProject">
        <h1>LET'S DESCRIBE YOUR PROJECT !</h1>
        <br />
        <br />
        <form>
          <div className="form">
            <label htmlFor="name">First, tell us who are you?</label>
            <br />
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Firstname Lastname"
            />

            <br />
            <br />
            <label htmlFor="mail">
              To put you in touch with people interested in your project, what's
              your email?
            </label>
            <br />
            <input
              id="mail"
              name="mail"
              type="text"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="Professional email"
            />
            <br />
            <br />
            <label htmlFor="projectName">
              What's the name of your project?{" "}
            </label>
            <br />
            <input
              id="projectName"
              name="projectName"
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Project X"
            />
            <br />
            <br />
            <label htmlFor="crew">How many members are needed?</label>
            <br />
            <input
              id="crew"
              name="crew"
              type="number"
              min="0"
              value={crew}
              onChange={(e) => setCrew(e.target.value)}
              placeholder="0"
            />
            <br />
            <br />
            <label htmlFor="skills">
              What technical skills and programming languages are needed?{" "}
            </label>
            <br />
            <textarea
              id="skills"
              name="skills"
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Be as specific as possible"
            />
            <br />
            <br />
            <label htmlFor="departureDate">
              When will your project start?{" "}
            </label>
            <br />
            <input
              id="departureDate"
              name="departureDate"
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="description">
              Tell us more about your project:{" "}
            </label>
            <br />
            <textarea
              id="description"
              name="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Be as specific as possible"
            />
            <br />
            <br />
            <label htmlFor="file">
              If you want to share files related to your project:{" "}
            </label>
            <br />
            <input type="file" name="file" />
            <button type="button" onClick={handleSubmitForm}>
              Submit
            </button>
          </div>
        </form>
        <br />
        <br />
      </div>
    </>
  );
}
