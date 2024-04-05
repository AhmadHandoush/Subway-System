import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
function Card({ station }) {
  const { id, name, image, open_hour, close_hour, location } = station;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  const handleClick = () => {
    window.location.href = `/astation/${id}`;
  };

  return (
    <div className="card" data-aos="fade-down" onClick={handleClick}>
      <div className="station-image">
        <img src={`/${image}`} alt="station" />
      </div>

      <h3>{name}</h3>
      <p>{location}</p>
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

export default Card;
