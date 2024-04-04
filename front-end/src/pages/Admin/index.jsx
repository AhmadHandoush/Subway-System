import "./index.css";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="flex between admin">
      <Outlet />
    </div>
  );
};

export default Admin;