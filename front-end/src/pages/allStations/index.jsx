import Search from "./components/search";
import Map from "./components/map";
import { useEffect, useState } from "react";
import axios from "axios";

const All = () => {
  const [Stations, setStations] = useState([]);

  useEffect(() => {
    axios({
      url: "http://127.0.0.1:8000/api/get_stations",
      method: "get",
    }).then(function (res) {
      console.log(res);
      if (res.status == 200) {
        setStations(res.data);
      }
    });
  }, []);

  return (
    <div className="flex all-stations center column full-width">
      <Map stations={Stations}/>
      <Search />
    </div>
  );
};

export default All;
