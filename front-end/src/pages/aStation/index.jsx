import "./index.css";
import Title from "../Home/components/Title";
import RideCard from "../../Components/rideCard";

const AStation = () => {
  return (
    <div className="flex center full-width column">
      <div className="station-info flex justify-center column txt-white">
        <h1>Station Name</h1>
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
          <div className="half-width arrive">
            <div className="flex center"></div>
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

export default AStation;
