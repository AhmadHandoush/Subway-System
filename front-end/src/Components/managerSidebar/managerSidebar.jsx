import { NavLink } from "react-router-dom";
import './managerSidebar.css'

function ManagerSidebar() {
 

  return (
    <div className="sidebar flex justify-center align-start">
        <nav className="manager-nav flex">
          <ul className="main-nav flex column">
            <li>
              <NavLink to={"/Manager/Station"}>Station</NavLink>
            </li>
            <li>
              <NavLink to={"/Manager/Ride"}>Ride</NavLink>
            </li>{" "}
            <li>
              <NavLink to={"/Manager/Chat"}>Chat</NavLink>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default ManagerSidebar;
