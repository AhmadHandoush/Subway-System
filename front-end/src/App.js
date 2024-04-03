import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./Components/Footer";
import Profile from "./pages/Profile";
import All from "./pages/allStations";
import Manager from "./pages/Manager";
import "./styles/colors.css";
import Ride from "./pages/Manager/Ride";
import Chat from "./pages/Manager/Chat";
import Station from "./pages/Manager/Station";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Header />

        <Routes>
          <Route path="/Manager" element={<Manager />}>
            <Route path="/Manager/Station" element={<Station />} />
            <Route path="/Manager/Chat" element={<Chat />} />
            <Route path="/Manager/Ride" element={<Ride />} />
          </Route>
          <Route path="/allStations" element={<All />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
