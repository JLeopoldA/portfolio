import "./SubHeader.css";

function SubHeader() {
    return (
        <div className="sub-header">
            <nav className="nav-main">
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
}
export default SubHeader;