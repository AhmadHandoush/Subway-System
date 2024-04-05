import "./index.css";
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { FaTrain, FaCoins } from "react-icons/fa";


const Admin = () => {

  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate('/admin/dashboard');
  };
  const navigateToBranches = () => {
    navigate('/admin/branches');
  };
  const navigateToCoin = () => {
    navigate('/admin/coinrequest');
  };

  

  return (
    <div className="flex between admin">
      <div className="panel-left full-width flex column">
          <div className="logo">
            <h2>ADMIN</h2>
          </div>

          <div className="side-bar flex column">
              <a href="#" onClick={navigateToDashboard}>
                <MdDashboard />
                <h3>Dashboard</h3>
              </a>
              <a href="#" onClick={navigateToBranches}>
                <FaTrain />
                <h3>Branches</h3>
              </a>
              <a href="#" onClick={navigateToCoin}>
                <FaCoins />
                <h3>Coin Requests</h3>
              </a>
          </div>
        </div>
      <Outlet />
    </div>
  );
};

export default Admin;