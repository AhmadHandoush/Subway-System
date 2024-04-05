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
import AStation from "./pages/aStation"
import AllRides from "./pages/allRides";
import Admin from "./pages/Admin";
import Branches from "./pages/Admin/Branches"
import Dashboard from "./pages/Admin/Dashboard";
import CoinRequest from "./pages/Admin/CoinRequest";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
       

        <Routes>
          <Route path="/Manager" element={<Manager />}>
            <Route path="/Manager/Station" element={<Station />} />
            <Route path="/Manager/Chat" element={<Chat />} />
            <Route path="/Manager/Ride" element={<Ride />} />
          </Route>
          
          <Route path="/allrides" element={<AllRides />}></Route>
          <Route path="/astation/:id" element={<AStation />}></Route>
          <Route path="/allStations" element={<All />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/admin" element={<Admin />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/branches" element={<Branches />} />
            <Route path="/admin/coinrequest" element={<CoinRequest />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
