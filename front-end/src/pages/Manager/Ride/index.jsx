import { useState } from "react";
import "./index.css";
import RideCard from "../../../Components/rideCard";
import { FaPen } from "react-icons/fa";
import Title from "../../Home/components/Title";
const Ride = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");

  const handleRideUpdate = () => {};

  const times = [
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "00:00",
  ];
  return (
    <div className="ride flex center column full-width">
      <div className="update-station flex bg-secondary full-width column">
        <h1>create ride:</h1>

        <div className="select flex between">
          <label htmlFor="departure">Departure time:</label>
          <select
            name=""
            id="departure"
            onChange={(e) => setDeparture(e.target.value)}
          >
            {times.map((time) => (
              <option value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div className="select flex between">
          <label htmlFor="arrival">Arrival time:</label>
          <select
            name=""
            id="arrival"
            onChange={(e) => setArrival(e.target.value)}
          >
            {times.map((time) => (
              <option value={time}>{time}</option>
            ))}
          </select>
        </div>

        <button
          className="update-btn bg-primary txt-white"
          onClick={handleRideUpdate}
        >
          update <span></span> <FaPen />
        </button>
      </div>
      <div className=" flex column center full-width">
        <Title>Recent Rides</Title>
        <div className="update-station flex between bg-secondary full-width">
          <div className="half-width ">
            <h1 className="h1">Arriving</h1>
            <RideCard
              departure="3:00"
              arrival="4:00"
              rideId="12"
              imageSource="https://t3.ftcdn.net/jpg/01/63/18/74/360_F_163187413_bpwM2WLBT9VHKNY8bgbSemsmJvoVHFtj.webp"
            />
            <RideCard
              departure="3:00"
              arrival="4:00"
              rideId="12"
              imageSource="https://t3.ftcdn.net/jpg/01/63/18/74/360_F_163187413_bpwM2WLBT9VHKNY8bgbSemsmJvoVHFtj.webp"
            />
            <RideCard
              departure="3:00"
              arrival="4:00"
              rideId="12"
              imageSource="https://t3.ftcdn.net/jpg/01/63/18/74/360_F_163187413_bpwM2WLBT9VHKNY8bgbSemsmJvoVHFtj.webp"
            />
            <RideCard
              departure="3:00"
              arrival="4:00"
              rideId="12"
              imageSource="https://t3.ftcdn.net/jpg/01/63/18/74/360_F_163187413_bpwM2WLBT9VHKNY8bgbSemsmJvoVHFtj.webp"
            />
          </div>
          <div className="half-width ">
            <h1 className="h1">Departing</h1>
            <RideCard
              departure="3:00"
              arrival="4:00"
              rideId="12"
              imageSource="https://t3.ftcdn.net/jpg/01/63/18/74/360_F_163187413_bpwM2WLBT9VHKNY8bgbSemsmJvoVHFtj.webp"
            />
            <RideCard
              departure="3:00"
              arrival="4:00"
              rideId="12"
              imageSource="https://t3.ftcdn.net/jpg/01/63/18/74/360_F_163187413_bpwM2WLBT9VHKNY8bgbSemsmJvoVHFtj.webp"
            />
            <RideCard
              departure="3:00"
              arrival="4:00"
              rideId="12"
              imageSource="https://t3.ftcdn.net/jpg/01/63/18/74/360_F_163187413_bpwM2WLBT9VHKNY8bgbSemsmJvoVHFtj.webp"
            />
            <RideCard
              departure="3:00"
              arrival="4:00"
              rideId="12"
              imageSource="https://t3.ftcdn.net/jpg/01/63/18/74/360_F_163187413_bpwM2WLBT9VHKNY8bgbSemsmJvoVHFtj.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ride;
