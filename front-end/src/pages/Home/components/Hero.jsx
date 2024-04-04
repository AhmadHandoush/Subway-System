import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="content" data-aos="fade-up">
        <h2>Experience Great & Enjoyable Trip Today</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores sunt
          laborum sed illo recusandae aut corporis fuga tempore temporibus
          sequi.
        </p>
        <button>
          <Link>
            Explore<i class="fa-solid fa-arrow-right"></i>{" "}
          </Link>
        </button>
      </div>
    </section>
  );
}

export default Hero;
