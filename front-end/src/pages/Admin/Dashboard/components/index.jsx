import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
const StationCard = ({ station }) => {
  const { name, image, open_hour, close_hour} = station;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="card" data-aos="fade-down">
      <div className="station-image">
        <img src={`/${image}`} alt="station" />
      </div>

      <h3>{name}</h3>
      <div className="flex-between">
        <p>open hour:</p>
        <p>{open_hour}</p>
      </div>
      <div className="flex-between">
        <p>close hour:</p>
        <p>{close_hour}</p>
      </div>
    </div>
  );
}

export default StationCard;