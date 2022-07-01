import "./Profile.css";
import NavBar from "../components/NavBar";
import ProjectsList from "../data/ProjectsList";
import ProjectProfil from "../components/ProjectProfil";
import Fake1 from "../assets/ImageWeb.jpg";
import Fake2 from "../assets/blockchain.jpeg";
import Fake3 from "../assets/envio-18.jpg";
import Fake4 from "../assets/imggraph.png";
import Fake5 from "../assets/judge_set1.jpg";
import Fake6 from "../assets/nadec.jpg";
import Fake7 from "../assets/succes_project-04.jpg";
import Fake8 from "../assets/vecteezy_business.jpg";
import wankul from "../assets/avatar.png";

export default function Profile() {
  return (
    <>
      <NavBar />
      <div className="profile-container">
        <div className="headline">
          <div className="avatarcontainer">
            <img className="profilePic" src={`${wankul}`} alt="userpic" />
            <h1>Justin Thyme</h1>
            <p>justin.thyme@apside.com</p>
            <p>Nantes</p>
            <h2>⚡ Javascript Developper 💻</h2>
          </div>
        </div>

        <div className="contribution">
          <h2>Projects I contributed to 🤝</h2>
        </div>
        <div className="profileLine">
          <div className="rougeCard">
            <img className="profileImage" src={`${Fake1}`} alt="project-pic" />
            <ProjectProfil data={ProjectsList[11]} />
          </div>

          <div className="vertCard">
            <img className="profileImage" src={`${Fake2}`} alt="project-pic" />
            <ProjectProfil data={ProjectsList[12]} />
          </div>

          <div className="bleuCard">
            <img className="profileImage" src={`${Fake3}`} alt="project-pic" />
            <ProjectProfil data={ProjectsList[13]} />
          </div>

          <div className="vertCard">
            <img className="profileImage" src={`${Fake4}`} alt="project-pic" />
            <ProjectProfil data={ProjectsList[14]} />
          </div>

          <div className="rougeCard">
            <img className="profileImage" src={`${Fake5}`} alt="project-pic" />
            <ProjectProfil data={ProjectsList[15]} />
          </div>

          <div className="bleuCard">
            <img className="profileImage" src={`${Fake6}`} alt="project-pic" />
            <ProjectProfil data={ProjectsList[16]} />
          </div>

          <div className="rougeCard">
            <img className="profileImage" src={`${Fake7}`} alt="project-pic" />
            <ProjectProfil data={ProjectsList[17]} />
          </div>

          <div className="bleuCard">
            <img className="profileImage" src={`${Fake8}`} alt="project-pic" />
            <ProjectProfil data={ProjectsList[18]} />
          </div>
        </div>
      </div>
    </>
  );
}
