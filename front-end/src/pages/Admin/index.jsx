import "./index.css";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="flex admin">
      <div className="full-width">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;