// import react from "react";
import SubHeader from "../SubHeader/SubHeader";
import Typewriter from "../Typewriter/Typerwriter";
import "./Header.css";
import "../../Assets/Fonts/Fonts.css";
function Header() {
    const headerText = "Justin Acosta"
    return (
        <div>
            <header className="header-main">
                <h1 style={{ fontFamily: 'Disco'}}>
                    {headerText}
                </h1>
            </header>
            {/* <SubHeader /> */}
        </div>
    )
}
export default Header;