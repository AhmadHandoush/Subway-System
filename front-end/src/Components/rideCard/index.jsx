import "./index.css";

const RideCard = ({ imageSource, rideId, arrival, departure }) => {
  return (
    <div className="ride-card flex half-width">
      <img src={imageSource} alt="" className="half-width" />

      <div className="info flex center column full-width">
        <h1>
          Ride <span></span>
          {rideId}
        </h1>
        <h2>departs: {departure}</h2>
        <h2>arrives: {arrival}</h2>
      </div>
    </div>
  );
};

export default RideCard;
