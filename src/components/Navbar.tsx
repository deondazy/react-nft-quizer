import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/"><img alt="NFTQuizer" src="./assets/images/nftquizer.svg" /></Link>
            </div>
        </div>
    );
}

export default Navbar;