import { useEffect, useState } from "react";
import "./profile.css";
import Editbox from "./components/Editbox";
import Requestcoins from "./components/Requestcoins";
import Info from "./components/Info";
import Loader from "../../Components/Loader";

function Profile() {
  const [open, setOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [request, setRequest] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [id, setId] = useState(window.localStorage.getItem("user_id"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/users/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleRequest = () => {
    setRequest(!request);
  };
  return (
    <div className="profile">
      {overlay && <div className="overlay"></div>}
      <div className="container flex-between">
        <div className="left flex column">
          <div className="imagess">
            <div className="user-image">
              <img
                src="/360_F_220340016_85wy33BKA0L0N9bXFlMFeTqro6OHcsja.jpg"
                alt="user-profile"
              />
            </div>
          </div>
          <Info data={data} setOpen={setOpen} setOverlay={setOverlay} />
          <div className="coins">
            <button className="btn_request" onClick={handleRequest}>
              Request Coins
            </button>
            {request && <Requestcoins setRequest={setRequest} />}
          </div>
        </div>
        <div className="right flex column">
          <div className="taken flex-center">
            <h1>Taken Rides</h1>
          </div>
          <div className="">
            <ul className="user-rides flex column">
              <li className="ride flex column">
                <div className="departure flex-between">
                  <h3>Departure Station:</h3>
                  <p>Beirut</p>
                </div>
                <div className="arrival flex-between">
                  <h3>Arrival station</h3>
                  <p>Tripoli</p>
                </div>
                <div className="stars flex">
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
              </li>
              <li className="ride flex column">
                <div className="departure flex-between">
                  <h3>Departure Station:</h3>
                  <p>Beirut</p>
                </div>
                <div className="arrival flex-between">
                  <h3>Arrival station</h3>
                  <p>Tripoli</p>
                </div>
                <div className="stars flex">
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
              </li>
              <li className="ride flex column">
                <div className="departure flex-between">
                  <h3>Departure Station:</h3>
                  <p>Beirut</p>
                </div>
                <div className="arrival flex-between">
                  <h3>Arrival station</h3>
                  <p>Tripoli</p>
                </div>
                <div className="stars flex">
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {open && <Editbox setOpen={setOpen} setOverlay={setOverlay} />}
      </div>
    </div>
  );
}

export default Profile;
