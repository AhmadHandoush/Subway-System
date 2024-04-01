import { Link } from "react-router-dom";
import "./login.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login flex-center">
      <div className="overlay"></div>
      <div className="login-card flex column">
        <div className="top-title flex-center">
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <div className="input">
            <span className="flex-center">
              <i class="fa-solid fa-envelope"></i>
            </span>
            <input
              type="text"
              placeholder="Enter your email"
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

          <div className="submit flex-center">
            <button type="submit">Login</button>
          </div>
        </form>
        <p>
          Don't have an account?{" "}
          <span>
            <Link to={"/signup"}>Signup</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
