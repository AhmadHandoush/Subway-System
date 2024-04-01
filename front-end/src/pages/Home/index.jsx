import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Title from "./components/Title";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Hero />
        <Title>Popular Stations</Title>
        <Popular />
        <Title>Recommended Stations</Title>
        <Popular />
        <div className="go-stations">
          <button className="to-stations">
            <Link>
              View All stations<i class="fa-solid fa-arrow-right"></i>{" "}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
