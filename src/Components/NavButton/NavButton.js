import React from "react";
import "./NavButton.css";
import { Button } from "react-bootstrap";

const NavButton = ({buttonName, photo}) => {
    return (
        <div clasName="nav-button-container">
            <Button className="nav-button" variant="primary">
                <img src={photo} alt={buttonName} />
            </Button>
            <h6 style={{ fontFamily: 'TerminalText'}}>{buttonName}</h6>
        </div>
    );
}
export default NavButton;