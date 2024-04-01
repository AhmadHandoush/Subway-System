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
                <Link>About us</Link>
              </li>
              <li>
                <Link>About us</Link>
              </li>
              <li>
                <Link>About us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Column 2</h3>
            <ul className="flex column">
              <li>
                <Link>About us</Link>
              </li>
              <li>
                <Link>About us</Link>
              </li>
              <li>
                <Link>About us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Column 3</h3>
            <ul className="flex column">
              <li>
                <Link>About us</Link>
              </li>
              <li>
                <Link>About us</Link>
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
