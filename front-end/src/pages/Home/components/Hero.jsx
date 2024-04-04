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
          We are the best in the Middle East, We provide the best services for
          our passengers and we work for your comfort all the time. Trust us !
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
