import "./index.css";
import Title from "../Home/components/Title";
import RideCard from "../../Components/rideCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AStation = () => {
  const [departures, setDepartures] = useState([]);
  const [arrivals, setArrivals] = useState([]);
  const [Id, setId] = useState("");
  const [station, setStation] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getStation();
    getDepartures();
    getArrivals();
    setId(id);
  }, []);

  const getStation = () => {
    axios({
      url: `http://127.0.0.1:8000/api/get_station/${Id}`,
      method: "get",
    }).then((res) => {
      setStation(res.data);
      console.log(res);
    });
  };

  const getDepartures = () => {
    axios({
      url: `http://127.0.0.1:8000/api/get_departure_schedules/${Id}`,
      method: "get",
    }).then((res) => {
      setDepartures(res.data);
      console.log(res);
    });
  };

  const getArrivals = () => {
    axios({
      url: `http://127.0.0.1:8000/api/get_arrival_schedules/${Id}`,
      method: "get",
    }).then((res) => {
      setArrivals(res.data);
      console.log(res);
    });
  };

  return (
    <div className="flex center full-width column">
      <div className="station-info flex justify-center column txt-white">
        <h1>{station.name}</h1>
        <h2>Station manager</h2>
        <h2>Station location</h2>
      </div>

      <div className=" flex column center full-width">
        <Title>Schedule</Title>
        <div className="flex around full-width">
          <h1 className="h1">Arriving</h1>
          <h1 className="h1">Departing</h1>
        </div>
        <div className="update-stationss flex between bg-secondary full-width">
          <div className="half-width arrive">
            {arrivals.map((arrival) => (
              <RideCard
                departure={arrival.departure}
                arrival={arrival.arrival}
                rideId={arrival.id}
              />
            ))}
          </div>
          <div className="half-width arrive">
            <div className="flex center"></div>
            {departures.map((departure) => (
              <RideCard
                departure={departure.departure}
                arrival={departure.arrival}
                rideId={departure.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AStation;
