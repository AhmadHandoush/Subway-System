import "./index.css";

const RideCard = ({ rideId, arrival, departure }) => {
  return (
    <div className="ride-card flex full-width">
      <div className="info flex center column full-width">
        <h1>
          Ride <span></span>
          {rideId}
        </h1>
        <h2>departure: {departure}</h2>
        <h2>arrival: {arrival}</h2>
      </div>
    </div>
  );
};

export default RideCard;
