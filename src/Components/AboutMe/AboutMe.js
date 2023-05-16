import react from "react";
import "./AboutMe.css";
import "../../Assets/Fonts/Fonts.css"
import { ImageObject } from "../ImageObject/ImageObject";

function AboutMe() {
    const aboutMeIntroductionText = "I'm Justin Acosta! A versatile Full Stack Web Developer and creative enthusiast."
        + " My proficiency extends across HTML, CSS, Bootstrap, React, JavaScript, jQuery, NodeJS, Firebase, Express, SQL, and MongoDB."
        + " Furthermore, my knowledge in video game development with Unity, C#, Python, and Django adds an extra dimension to my skill set,"
        + " allowing me to explore the world of interactive and immersive digital experiences. ";
    const a = " If you're looking for a passionate and versatile Full Stack Web Developer who can bring your digital vision to life,"
    + " I would be thrilled to connect with you. Feel free to reach out to me through the contact information provided on this website "
    return (
        <div className="about-me-container">
            <div className="about-me-title" id="about-me-div">
                <div className="about-me-title-content">
                    <h2 className="about-me-title-h-tag" style={{fontFamily: 'TerminalText'}}>ABOUT ME</h2>
                </div>
                <div classname="about-me-photo">
                    <img className="about-me-photo-justin"src={ImageObject.justin}></img>
                </div>
            </div>
            <div className="about-me-content" id="about-me-div">
                <div className="about-me-text">
                    {/* <h3 className="about-me-text-h-tag">Hello!</h3> */}
                    <p className="about-me-text-content-a">
                            I'm Justin Acosta, a versatile Full Stack Web Developer and creative enthusiast!
                    </p>
                    <p className="about-me-text-content-b">
                        My proficiency extends across HTML, CSS, React, Javascript, NodeJS, Firebase, SQL, MongoDB, Heroku and Express.
                        Furthermore, my knowledge in video game development using Unity, C#, Python, and Django adds an extra dimension to my skill set,
                        allowing me to explore the world of interactive and immersive digital experiences.
                    </p>
                </div>
            </div>
            <div className="about-me-additional-content">
                <div className="about-me-additional-content-text">

                </div>
            </div>
        </div>
    );
};
export default AboutMe;