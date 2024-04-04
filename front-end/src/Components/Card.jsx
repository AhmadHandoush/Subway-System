function Card({ station }) {
  const { name, image, open_at, close_at, location } = station;
  return (
    <div className="card">
      <div className="station-image">
        <img src={`/${image}`} alt="station" />
      </div>

      <h3>{name}</h3>
      <p>{location}</p>
      <div className="flex-between">
        <p>open hours:</p>
        <p>
          {open_at}-{close_at}
        </p>
      </div>
    </div>
  );
}

export default Card;
