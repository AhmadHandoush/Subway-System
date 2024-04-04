import "./index.css";
import { FaSearch } from "react-icons/fa";

const RideSearchBar = () => {
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
    <div className="ride-search flex around">
      <div className="without-btn flex column center">
        <input type="text" />
        <div className="selects full-width flex evenly">
          <div className="flex center">
            <label htmlFor="departure-time">Departure</label>
            <select name="" id="departure-time">
              {times.map((time) => (
                <option value={time}>{time}</option>
              ))}
            </select>
          </div>
          <div className="flex center">
            <label htmlFor="arrival-time">Arrival</label>
            <select name="" id="arrival-time">
              {times.map((time) => (
                <option value={time}>{time}</option>
              ))}
            </select>
          </div>
          <div className="flex center">
            <label htmlFor="departure-location">To</label>
            <select name="" id="departure-location">
              {/* {times.map((#)=>(
                        <option value={time}>{time}</option>
                    ))} */}
            </select>
          </div>
          <div className="flex center">
            <label htmlFor="arrival-location">From</label>
            <select name="" id="arrival-location">
              {/* {times.map((#)=>(
                        <option value={time}>{time}</option>
                    ))} */}
            </select>
          </div>
        </div>
      </div>

      <div className="flex  center">
        <button className="search-btn txt-primary bg-white">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};
export default RideSearchBar;
