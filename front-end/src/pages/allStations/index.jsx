import Search from "./components/search";
import Map from "./components/map";
// import axios from "axios"
import { useEffect, useState } from "react";

const All = () => {
  const [Stations, setStation] = useState([]);

  const getStations = () => {};

  return (
    <div className="flex center column full-width">
      {/* <Map handleMapClick={handleMapClick} /> */}
      <Search />
    </div>
  );
};

export default All;
