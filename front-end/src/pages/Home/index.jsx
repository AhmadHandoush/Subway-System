import Hero from "./components/Hero";
import Title from "./components/Title";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Hero />
        <Title>Popular Stations</Title>
      </div>
    </div>
  );
}

export default Home;
