import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "../styles/header.css";
import { useEffect, useState } from "react";

function Header() {
  const [nav, setNav] = useState(false);
  const [guest, setGuest] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (!userId) {
      setGuest(true);
    }
  }, []);
  const handleLogout = () => {
    window.localStorage.clear();
    setGuest(!guest);
    setTimeout(() => navigate("/login"), 2000);
  };
  const location = useLocation();
  const { pathname } = location;

  const hideHeader = pathname === "/login" || pathname === "/signup";

  if (hideHeader) {
    return null;
  }
  return (
    <header className="header flex-items ">
      <div className="container flex-between flex-items">
        <div className="logo">
          <img src="/WhatsApp Image 2024-03-31 at 2.37.24 PM.jpeg" alt="logo" />
        </div>
        <nav className={`nav flex ${nav ? "open" : ""}`}>
          <ul className="main-nav flex-items">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/stations"}>Stations</NavLink>
            </li>{" "}
            <li>
              <NavLink to={"/rides"}>Rides</NavLink>
            </li>
            <li className={`${guest ? "disable" : ""}`}>
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
          </ul>
          {guest ? (
            <button className="btn-login">
              <Link to={"/login"}>Login</Link>
            </button>
          ) : (
            <button className="btn-logout" onClick={handleLogout}>
              Logout
            </button>
          )}
        </nav>
        <i class="menu fa-solid fa-bars" onClick={() => setNav(!nav)}></i>
      </div>
    </header>
  );
}

export default Header;
