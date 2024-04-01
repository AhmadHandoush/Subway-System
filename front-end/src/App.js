import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./Components/Footer";
import Profile from "./pages/Profile";

function App() {
  const isLoginPage = window.location.pathname === "/login";
  return (
    <div className="App">
      <BrowserRouter>
        <Header hidden={isLoginPage} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Footer hidden={isLoginPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
