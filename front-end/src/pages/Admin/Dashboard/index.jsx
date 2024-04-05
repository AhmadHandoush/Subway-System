import "./index.css";

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaTrain, FaCoins, FaUser } from "react-icons/fa";

import StationCard from "./components";

const Dashboard = () => {

  const [nbrPassengers, setNbrPassengers] = useState(0);
  const [nbrActStations, setnbrActStations] = useState(0);
  const [activeStations, setActiveStations] = useState([]);
  const [depRideCount, setDepRideCount] = useState(0);

  useEffect(() => {
    getNbrPassengers();
  }, []);

  useEffect(() => {
    getNbrActStations();
  }, []);

  useEffect(() => {
    getActStations();
  }, []);

  /*useEffect(() => {
    getDepRideCount();
  }, []);*/

  const getDepRideCount = async (id) => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/count_station_dep_rides`, { id });
      if (response.data && response.data.departureRideCount) {
        setDepRideCount(response.data.departureRideCount);
      }
    } catch (error) {
      console.error('Error accepting coin request:', error);
    }
  };

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
      <div className="panel-right flex column">
        <div className="flex nav-bar">
          <h1>Dashboard</h1>
        </div>

        <div className="analysis flex center">
          <div className="station-card">
            <FaUser />
            <h4>Total Passengers</h4>
            <h3 className="nb-passengers">{nbrPassengers}</h3>
          </div>

          <div className="station-card">
            <FaTrain />
            <h4>Active Stations</h4>
            <h3 className="act-stations">{nbrActStations}</h3>
          </div>

          <div className="station-card">
            
            <h4>Revenue</h4>
            <h3 className="rev">{nbrPassengers}</h3>
          </div>
        </div>

        <div className="flex nav-bar">
          <h1>Active Stations</h1>
        </div>

        <div className="analysis flex center">
          {activeStations.map(station => (
            <StationCard key={station.id} station={station} depRideCount={depRideCount} />
          ))}
        </div>
      </div>
    </div>
  );
};
  
export default Dashboard;