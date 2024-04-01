import { useState } from "react";
import Card from "../../../Components/Card";

// { id: 1, name: "ahmad", image: "ahmad", close: "12" },
// { id: 2, name: "ahmad", image: "ahmad", close: "12" },
// { id: 3, name: "ahmad", image: "ahmad", close: "12" },
function Popular() {
  const arr = [
    {
      id: 1,
      name: "beirut",
      image: "/brussels metro.jpg",
      open_at: "18",
      close_at: "22",
      location: "lebanon",
    },
    {
      id: 2,
      name: "saida",
      image: "/brussels metro.jpg",
      open_at: "18",
      close_at: "22",
      location: "paris",
    },
    {
      id: 3,
      name: "tripoli",
      image: "/brussels metro.jpg",
      open_at: "18",
      close_at: "22",
      location: "lebanon",
    },
  ];
  //   const [stations, setStations] = useState([]);
  //   setStations(arr);
  return (
    <div className="popular-stations">
      {arr.map((station) => (
        <Card key={station.id} station={station} />
      ))}
      {/* {stations.map((station) => (
        <div key={station.id}>
          <div>{station.name}</div>
          <div>{station.image}</div>
          <div>{station.close}</div>
        </div>
      ))} */}
      {/* {console.log(stations)} */}
    </div>
  );
}

export default Popular;
