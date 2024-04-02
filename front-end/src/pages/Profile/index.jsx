import { useState } from "react";
import "./profile.css";
import Editbox from "./components/Editbox";
import Requestcoins from "./components/Requestcoins";

function Profile() {
  const [open, setOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [request, setRequest] = useState(false);
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
          <div className="user-info">
            <div className="user-details flex column">
              <div className="username flex-between flex-items">
                <h2>Username:</h2>
                <p>Ahmad Handoush</p>
              </div>
              <div className="email flex-between flex-items">
                <h2>Email:</h2>
                <p>ahmad@gmail.com</p>
              </div>
              <div className="address flex-between flex-items">
                <h2>Address:</h2>
                <p>Beirut</p>
              </div>
              <div className="username flex-between flex-items">
                <h2>Balance:</h2>
                <p>200</p>
              </div>
              <button
                className=" edit flex-center"
                onClick={() => {
                  setOpen(true);
                  setOverlay(true);
                }}
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
          </div>
          <div className="coins">
            <button className="btn_request" onClick={handleRequest}>
              Request Coins
            </button>
            {request && <Requestcoins />}
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
