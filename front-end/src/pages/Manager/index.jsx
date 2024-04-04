import "./index.css";
import ManagerSidebar from "../../Components/managerSidebar/managerSidebar";
import { Outlet } from "react-router-dom";

const Manager = () => {
  return (
    <div className="flex Manager">
      <ManagerSidebar />
      <div className="full-width">
        <Outlet />
      </div>
    </div>
  );
};

export default Manager;
