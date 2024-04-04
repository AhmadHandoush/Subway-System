import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";
import "./index.css";
import "leaflet/dist/leaflet.css";
import L from 'leaflet'


const Map = ({stations}) => {
  

    const customIcon = L.icon({
      iconUrl: require('../../../../assets/pin.png'),
      iconSize: [38, 38], 
    });

    
  return (
    <div className="flex center map-wrapper">
      <MapContainer
        center={[33.8547, 35.8623]}
        zoom={9}
        
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stations.map(station => (
        <Marker key={station.id} position={[station.longitude, station.latitude]} icon={customIcon}>
          <Popup>{station.name}</Popup>
        </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
