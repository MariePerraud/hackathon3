import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ProjectCard from "../components/ProjectCard";
import ProjectsList from "../data/ProjectsList";
import NavBar from "../components/NavBar";
import "../components/ProjectCard.css";
import analytics from "../assets/analytics.jpg";
import oblivion from "../assets/oblivion.jpg";
import admin from "../assets/admin.jpg";
import rainbow from "../assets/rainbow.jpg";
import marketplace from "../assets/marketplace.jpg";
import talentshow from "../assets/talentshow.jpg";
import seo from "../assets/seo.jpg";
import sanchez from "../assets/sanchez.jpg";
import bakery from "../assets/bakery.png";

export default function Home() {
  const [search, setSearch] = useState(false);
  const [searchTags, setSearchTags] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(!search);
  };

  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="doublesearchbar">
          <div>
            <SearchBar
              searchTags={searchTags}
              setSearchTags={setSearchTags}
              searchCity={searchCity}
              setSearchCity={setSearchCity}
            />
          </div>
          <button
            className="searchMainBtn"
            type="submit"
            onClick={handleSearch}
          >
            🔎
          </button>
        </div>

        <div className="callToAction">
          <div className="actionContainer">
            <h2>Ready to innovate ? Don't hesitate !</h2>
            <Link to="/addProject">
              <button type="button" className="actionBtn">
                I have an idea 💡✨
              </button>
            </Link>
          </div>
        </div>

        <div className="titleProject">
          <h2>Upcoming Projects 📣</h2>
          <p className="arrowtext">
            See more <i className="arrow right" />
          </p>
        </div>
        <div className="futureProjContainer">
          <div className="redCard">
            <Link to="/project">
              <img
                className="projectImage"
                src={`${analytics}`}
                alt="project-pic"
              />
              <ProjectCard data={ProjectsList[3]} />
            </Link>
          </div>
          <div className="greenCard">
            <img
              className="projectImage"
              src={`${oblivion}`}
              alt="project-pic"
            />
            <ProjectCard data={ProjectsList[4]} />{" "}
          </div>
          <div className="blueCard">
            <img className="projectImage" src={`${admin}`} alt="project-pic" />
            <ProjectCard data={ProjectsList[1]} />
          </div>
        </div>

        <div className="titleProject">
          <h2>Projects in progress ⏳</h2>
          <p className="arrowtext">
            See more <i className="arrow right" />
          </p>
        </div>
        <div className="pastProjContainer">
          <div className="blueCard">
            <img
              className="projectImage"
              src={`${rainbow}`}
              alt="project-pic"
            />
            <ProjectCard data={ProjectsList[5]} />
          </div>
          <div className="redCard">
            <img
              className="projectImage"
              src={`${marketplace}`}
              alt="project-pic"
            />
            <ProjectCard data={ProjectsList[7]} />
          </div>
          <div className="greenCard">
            <img
              className="projectImage"
              src={`${talentshow}`}
              alt="project-pic"
            />
            <ProjectCard data={ProjectsList[9]} />
          </div>
        </div>

        <div className="titleProject">
          <h2>Finished Projects 🎬</h2>
          <p className="arrowtext">
            See more <i className="arrow right" />
          </p>
        </div>
        <div className="presentProjContainer">
          <div className="greenCard">
            <img className="projectImage" src={`${seo}`} alt="project-pic" />
            <ProjectCard data={ProjectsList[6]} />
          </div>
          <div className="blueCard">
            <img
              className="projectImage"
              src={`${sanchez}`}
              alt="project-pic"
            />
            <ProjectCard data={ProjectsList[10]} />
          </div>
          <div className="redCard">
            <img className="projectImage" src={`${bakery}`} alt="project-pic" />
            <ProjectCard data={ProjectsList[2]} />
          </div>
        </div>
      </div>
    </>
  );
}
