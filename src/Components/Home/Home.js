import react from "react";
import "./Home.css";
import NavButton from "../NavButton/NavButton";
import { ImageObject } from "../ImageObject/ImageObject";

function Home() {
    return (
        <div className="nav-bar">
            <NavButton buttonName="About Me" photo={ImageObject.aboutMe} />
            <NavButton buttonName="Experience" photo={ImageObject.experience} />
            <NavButton buttonName="Projects" photo={ImageObject.projects} />
            <NavButton buttonName="Skills" photo={ImageObject.skills} />
            <NavButton buttonName="Education" photo={ImageObject.education} />
            <NavButton buttonName="Contact" photo={ImageObject.contact} />
        </div>
    );
}
export default Home;