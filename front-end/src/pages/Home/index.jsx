import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Title from "./components/Title";
import "aos/dist/aos.css";
import AOS from "aos";
import "./home.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="home">
      <div className="container">
        <Hero />
        <Title>Popular Stations</Title>
        <Popular />
        <Title>Recommended Stations</Title>
        <Popular />
        <div className="go-stations">
          <button className="to-stations" data-aos="fade-left">
            <Link to={"/stations"}>
              View All stations<i class="fa-solid fa-arrow-right"></i>{" "}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
