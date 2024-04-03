import { Link, NavLink } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header className="header flex-items ">
      <div className="container flex-between">
        <div className="logo">
          <img src="/WhatsApp Image 2024-03-31 at 2.37.24 PM.jpeg" alt="logo" />
        </div>
        <nav className="nav flex">
          <ul className="main-nav flex-items">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/allstations"}>Stations</NavLink>
            </li>{" "}
            <li>
              <NavLink to={"/allrides"}>Rides</NavLink>
            </li>
            <li>
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
          </ul>
          <button className="btn-login">
            <Link to={"/login"}>Login</Link>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
