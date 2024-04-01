import "./login.css";

function Login() {
  return (
    <div className="login flex-center">
      <div className="login-card flex column">
        <div className="top-title flex-center">
          <h2>Login</h2>
        </div>
        <form action="">
          <label>Email</label>
          <div className="input">
            <span className="flex-center">
              <i class="fa-solid fa-user"></i>
            </span>
            <input type="text" placeholder="Enter your email" />
          </div>
          <label>Password</label>
          <div className="input">
            <span className="flex-center">
              <i class="fa-solid fa-lock"></i>
            </span>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <span>Signup</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
