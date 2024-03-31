import { Link, NavLink } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header className="header flex-items ">
      <div className="container flex-between">
        <div className="logo">KAH</div>
        <nav className="nav flex">
          <ul className="main-nav flex-items">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/stations"}>Stations</NavLink>
            </li>
            <li>
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
          </ul>
          <button className="login">
            <Link to={"/login"}>Login</Link>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
