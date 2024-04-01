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
      </div>
    </div>
  );
}

export default Home;
