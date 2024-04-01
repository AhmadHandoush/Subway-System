import { Link } from "react-router-dom";
import "./signup.css";
import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
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
