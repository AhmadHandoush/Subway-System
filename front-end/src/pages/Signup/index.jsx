import "./signup.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function MyComponent() {
  const navigate = useNavigate();
  window.localStorage.clear();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    latitude: "",
    longitude: "",
  });
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setFormData({
          ...formData,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  getLocation();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/add_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="signup flex-center">
      <div className="overlay"></div>
      <div className="signup-card">
        <div className="flex-center">
          <h2>Signup</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <div className="input">
            <span className="flex-center">
              <i className="fa-solid fa-user"></i>
            </span>
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <label>Email</label>
          <div className="input">
            <span className="flex-center">
              <i className="fa-solid fa-envelope"></i>
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <label>Password</label>
          <div className="input">
            <span className="flex-center">
              {" "}
              <i className="fa-solid fa-lock"></i>
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <input type="hidden" name="latitude" value={formData.latitude} />
            <input type="hidden" name="longitude" value={formData.longitude} />
          </div>
          <div className="flex-center">
            <button type="submit">Submit</button>
          </div>
          <div className="flex">
            <p>
              Already have an account?
              <span>
                <Link to={"/login"}>Login</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyComponent;
