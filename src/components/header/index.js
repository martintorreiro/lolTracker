import { Link } from "react-router-dom";
import lolLogo from "../../assets/images/lol-logo.webp";
import tftLogo from "../../assets/images/tft-logo.webp";
import valLogo from "../../assets/images/val-logo.webp";
export const Title = ({ className, title }) => {
  return (
    <header className="navigation_menu">
      <nav>
        <menu>
          <Link to="/">
            <li>
              <h1>RTR</h1>
            </li>
          </Link>
          <Link to="/LOL">
            <li>
              <img src={lolLogo} alt="lol-icon" height="30px" />
            </li>
          </Link>
          <Link to="/TFT">
            <li>
              <img src={tftLogo} alt="tft-icon" height="30px" />
            </li>
          </Link>
          <Link to="/VAL">
            <li>
              <img src={valLogo} alt="val-icon" height="30px" />
            </li>
          </Link>
        </menu>
      </nav>
    </header>
  );
};
