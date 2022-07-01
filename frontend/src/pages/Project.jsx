import { useState } from "react";
import NavBar from "../components/NavBar";
import "./Project.css";
import analytics from "../assets/analytics.jpg";

export default function Project() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsShown((current) => !current);
  };

  return (
    <>
      <NavBar />

      <div className="solocontainer">
        <div className="soloCard">
          <img className="soloImage" src={`${analytics}`} alt="project-pic" />
          <div className="solotext">
            <h1>⚙ Analytics Toolmaker ⚙</h1>
            <p>Launched by : Jessica Lang</p>
            <p>Office : Bruxelles 🚩</p>
            <p>Slots: 10 people </p>
            <p className="solodesc">
              The idea is to generalise datatypes and create an analysis
              template for all the future applications requiring financial
              insights. For this project we'll need about 5 Python programmers
              for the backend and 5 Javascript developper for the frontend. We
              already have a product owner and designer for the project.
              Applications are open !
            </p>
            <p>#data #dev #analytics #python #javascript </p>
            <h3>Launch Date 🚀 09/07/2022</h3>
          </div>
          <button onClick={handleClick} type="button" className="solobtn">
            I want in ☝
          </button>
        </div>
        {isShown && (
          <div>
            <div className="participate">
              <div className="participateText">
                <h2>We have well received your application 📬</h2>
                <p>
                  We are glad for your interest in this project and will answer
                  you ASAP !
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
