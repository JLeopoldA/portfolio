import react from "react";
import "./Home.css";
import NavButton from "../NavButton/NavButton";
import { ImageObject } from "../ImageObject/ImageObject";
import AboutMe from "../AboutMe/AboutMe";

function Home() {
    return (
        <div className="home-container">
            <div className="nav-container">
                <div className="nav-bar">
                    <NavButton className="nav-button" buttonName="ABOUT ME" photo={ImageObject.aboutMe} />
                    <NavButton className="nav-button" buttonName="EXPERIENCE" photo={ImageObject.experience} />
                    <NavButton className="nav-button" buttonName="PROJECTS" photo={ImageObject.projects} />
                    <NavButton className="nav-button" buttonName="SKILL SET" photo={ImageObject.skills} />
                    <NavButton className="nav-button" buttonName="EDUCATION" photo={ImageObject.education} />
                    <NavButton className="nav-button" buttonName="CONTACT" photo={ImageObject.contact} />
                </div>
            </div>
            <div className="current-content">
                <AboutMe />
            </div>
        </div>
    );
}
export default Home;