import { Link } from "react-router-dom";

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">CINEHUB App</Link>
        </div>
        <div className="navbar-lnks">
            <Link to="/">Dashboard</Link>
            <Link to="/favorites">Favorites</Link>
        </div>
    </nav>
}

export default NavBar