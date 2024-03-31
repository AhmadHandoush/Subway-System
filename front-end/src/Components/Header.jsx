import { NavLink } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header className="header ">
      <div className="container flex-between">
        <div className="logo">KAH</div>
        <nav>
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
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
