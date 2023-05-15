import React from "react";
import "./NavButton.css";
import { Button } from "react-bootstrap";

const NavButton = ({buttonName, photo}) => {
    return (
        <div clasName="nav-button-container">
            <Button className="nav-button" variant="primary">
                <img src={photo} alt={buttonName} />
            </Button>
            <h4>{buttonName}</h4>
        </div>
    );
}
export default NavButton;