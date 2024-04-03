import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./Components/Footer";
import Profile from "./pages/Profile";
import All from "./pages/allStations";
import './styles/colors.css'

import ReviewCard from "./Components/reviewCard/reviewCard";

function App() {
  const isLoginPage = window.location.pathname === "/login";
  return (
    <div className="App">
      <BrowserRouter>
        <Header hidden={isLoginPage} />
        <ReviewCard
          username="Ali"
          reviewText="asdhafag ad asdasd as as asdsadasd asd ha fas fsdfasdf asd fasd fs sfadhadfgadgadgadfgafgd"
        />
        <Routes>
          <Route path="/allStations" element={<All />}></Route>
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
