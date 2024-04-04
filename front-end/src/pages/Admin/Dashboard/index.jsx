import "./index.css";

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

  const [nbrPassengers, setNbrPassengers] = useState(0);
  const [nbrActStations, setnbrActStations] = useState(0);
  const [activeStations, setActiveStations] = useState([]);
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

  useEffect(() => {
    getNbrPassengers();
  }, []);

  useEffect(() => {
    getNbrActStations();
  }, []);

  useEffect(() => {
    getActStations();
  }, []);

  const getNbrPassengers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/count_passengers');
      if (response.data) {
        setNbrPassengers(response.data.count);
      }
    } catch (error) {
    console.error('Error fetching posts:', error);
    }
  };

  const getNbrActStations = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/count_active_stations');
      if (response.data) {
        setnbrActStations(response.data.count);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const getActStations = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get_active_stations');
      if (response.data) {
        console.log(response.data);
        setActiveStations(response.data);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
      <div className="panel full-width flex">
        <div className="panel-left full-width flex column">
          <div className="logo">
            <img src="" alt="" className="logo-img" />
            <h2>ADMIN</h2>
          </div>

          <div className="side-bar flex column">
              <a href="#" onClick={navigateToDashboard}>
                
                <h3>Dashboard</h3>
              </a>
              <a href="#" onClick={navigateToBranches}>
                <h3>Branches</h3>
              </a>
              <a href="#" onClick={navigateToCoin}>
                
                <h3>Coin Requests</h3>
              </a>
          </div>
        </div>

        <div className="panel-right flex column">
          <div className="flex nav-bar">
            <h1>Dashboard</h1>
          </div>

          <div className="analysis flex center">
            <div className="station-card">
              
              <h4>Total Passengers</h4>
              <h3 className="nb-flights">{nbrPassengers}</h3>
            </div>

            <div className="station-card">
              
              <h4>Active Stations</h4>
              <h3 className="users">{nbrActStations}</h3>
            </div>

            <div className="station-card">
              
              <h4>Revenue</h4>
              <h3 className="rev">{nbrPassengers}</h3>
            </div>
          </div>
        </div>
      </div>
  );
};
  
export default Dashboard;