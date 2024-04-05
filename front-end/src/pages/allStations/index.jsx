import Search from "./components/search";
import Map from "./components/map";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card";
import "./index.css";

const All = () => {
  const [allStations, setAllStations] = useState([]);
  const [Stations, setStations] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");

  useEffect(() => {
    getStations();
  }, []);

  const getStations = () => {
    axios({
      url: "http://127.0.0.1:8000/api/get_stations",
      method: "get",
    }).then(function (res) {
      console.log(res);
      if (res.status == 200) {
        setAllStations(res.data);
        setStations(res.data);
      }
    });
  };

  const handleSearch = () => {
    const search = allStations.filter((e) =>
      e.name.toLowerCase().includes(searchTerms.toLowerCase())
    );
    setStations(search);
  };

  return (
    <div className="flex all-stations center column full-width">
      <Map stations={Stations} />
      <Search
        handleTerms={(e) => {
          setSearchTerms(e.target.value);
        }}
        handleSearch={handleSearch}
      />
      <div className="station-cards flex center">
        {Stations.map((station) => (
          <Card station={station} />
        ))}
      </div>
    </div>
  );
};

export default All;
