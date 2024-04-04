import "./index.css";

import axios from 'axios';
import React, { useEffect, useState } from 'react';



const Branches = () => {

  const [stations, setStations] = useState([]);
  const [newStationData, setNewStationData] = useState({
    name: '',
    latitude: '',
    longitude: '',
    status: '',
    manager_id: '',
    open_hour: '',
    close_hour: '',
    image: '',
  });

  useEffect(() => {
    getStations();
  }, []);

  const getStations = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get_stations');
      if (response.data) {
        console.log(response.data);
        setStations(response.data);
      }
    } catch (error) {
    console.error('Error fetching posts:', error);
    }
  };

  const handleActivate = async (id) => {
    try {
      await axios.post('http://127.0.0.1:8000/api/activate_station', { id });
      getStations();
    } catch (error) {
      console.error('Error activating station:', error);
    }
  };
  
  const handleShutdown = async (id) => {
    try {
      await axios.post('http://127.0.0.1:8000/api/shutdown_station', { id });
      getStations();
    } catch (error) {
      console.error('Error shutting down station:', error);
    }
  };

  const handleAddStation = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/add_station', newStationData);
      setNewStationData({
        name: '',
        latitude: '',
        longitude: '',
        status: '',
        manager_id: '',
        open_hour: '',
        close_hour: '',
        image: '',
      });
      getStations();
    } catch (error) {
      console.error('Error adding station:', error);
    }
  };
  
  const handleRemoveStation = async (id) => {
    try {
      await axios.post('http://127.0.0.1:8000/api/remove_station', { id });
      getStations();
    } catch (error) {
      console.error('Error removing station:', error);
  }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStationData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setNewStationData(prevState => ({
      ...prevState,
      image: 'imageFile'
    }));
  };
  /*useEffect(() => {
    handleRemoveStation(4);
  }, []);*/

  return (
    <div className="flex column admin">
      <div>
        <h2>Stations</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {stations.map(station => (
              <tr key={station.id}>
                <td>{station.name}</td>
                <td>{station.status}</td>
                <td>
                  {station.status === 'Active' ? (
                    <>
                      <button onClick={() => handleShutdown(station.id)}>Shutdown</button>
                      <button onClick={() => handleRemoveStation(station.id)}>Remove</button>
                    </>
                    
                  ) : (
                    <>
                      <button onClick={() => handleActivate(station.id)}>Activate</button>
                      <button onClick={() => handleRemoveStation(station.id)}>Remove</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2>Add Station</h2>
        <input type="text" name="name" placeholder="Name" value={newStationData.name} onChange={handleChange} />
        <input type="text" name="latitude" placeholder="Latitude" value={newStationData.latitude} onChange={handleChange} />
        <input type="text" name="longitude" placeholder="Longitude" value={newStationData.longitude} onChange={handleChange} />
        <select name="open_hour" value={newStationData.open_hour} onChange={handleChange}>
          {Array.from({ length: 24 }, (_, index) => {
            const hour = String(index).padStart(2, '0') + ':00';
            return <option key={hour} value={hour}>{hour}</option>;
          })}
        </select>
        <select name="close_hour" value={newStationData.close_hour} onChange={handleChange}>
          {Array.from({ length: 24 }, (_, index) => {
            const hour = String(index).padStart(2, '0') + ':00';
            return <option key={hour} value={hour}>{hour}</option>;
          })}
        </select>
        <input type="text" name="status" placeholder="Status" value={newStationData.status} onChange={handleChange} />
        <input type="text" name="manager_id" placeholder="Manager ID" value={newStationData.manager_id} onChange={handleChange} />
        <input type="file" name="image" onChange={handleImageChange} />
        <button onClick={handleAddStation}>Add Station</button>
      </div>
    </div>
  );
};
  
  export default Branches;