import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer({ hidden }) {
  if (hidden) {
    return;
  }
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns flex">
          <div className="footer-column">
            <h3>Column 1</h3>
            <ul className="flex column">
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Contact us</Link>
              </li>
              <li>
                <Link>Services</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Column 2</h3>
            <ul className="flex column">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Stations</Link>
              </li>
              <li>
                <Link>Rides</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Column 3</h3>
            <ul className="flex column">
              <li>
                <Link>Email:example@gmail.com</Link>
              </li>
              <li>
                <Link>www.SubwaySystem.com</Link>
              </li>
              <li>
                <Link>
                  <i className="fab fa-facebook"></i>
                </Link>

                <Link>
                  {" "}
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link>
                  {" "}
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="reserved">
        <small>&copy; All Right Reserved. Subway System for your service</small>
      </div>
    </footer>
  );
}

export default Footer;
