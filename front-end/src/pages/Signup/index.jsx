import { Link } from "react-router-dom";
import "./signup.css";
import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    pasword: "",
    confirm: "",
  });
  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.example.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      setFormData({
        username: "",
        email: "",
      });

      console.log("Data submitted successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="signup flex-center">
      <div className="overlay"></div>
      <div className="signup-card">
        <div className="top-title flex-center">
          <h2>Signup</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <div className="input">
            <span className="flex-center">
              <i class="fa-solid fa-user"></i>
            </span>
            <input
              type="text"
              placeholder="Enter your name"
              value={formData.username}
              onChange={handlechange}
              required
            />
          </div>
          <label>Email</label>
          <div className="input">
            <span className="flex-center">
              <i class="fa-solid fa-envelope"></i>
            </span>
            <input
              type="text"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handlechange}
              required
            />
          </div>
          <label>Password</label>
          <div className="input">
            <span className="flex-center">
              <i class="fa-solid fa-lock"></i>
            </span>
            <input
              type="password"
              placeholder="Enter your password"
              value={formData.pasword}
              onChange={handlechange}
              required
            />
          </div>
          <label>Confirm password</label>
          <div className="input">
            <span className="flex-center">
              <i class="fa-solid fa-lock"></i>
            </span>
            <input
              type="password"
              placeholder="Enter your password"
              value={formData.confirm}
              onChange={handlechange}
              required
            />
          </div>

          <div className="submit flex-center">
            <button type="submit">Signup</button>
          </div>
        </form>
        <p>
          Already have an account?{" "}
          <span>
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
