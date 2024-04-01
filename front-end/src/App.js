import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./styles/header.css";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./Components/Footer";

function App() {
  const isLoginPage = window.location.pathname === "/login" || "/signup";
  return (
    <div className="App">
      <BrowserRouter>
        <Header hidden={isLoginPage} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
        <Footer hidden={isLoginPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
