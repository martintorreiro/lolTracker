/* import { SearchSummoner } from "./lol-home";
import { TopPlayers } from "../components/topPlayers/topPlayers"; */
import frontPageLol from "../assets/images/portada-lol.webp";
import frontPageTft from "../assets/images/portada-tft.webp";
import frontPageVal from "../assets/images/portada-val.webp";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <section className="home">
      <section className="home_hero">
        <h2>
          RIOT <span>TRACKER</span>
        </h2>
        <section>
          <span>ANALYZE YOUR STATISTICS TO</span> <span>IMPROVE YOUR GAME</span>
          <span> AND EXPAND KNOWLEDGE</span>
        </section>
      </section>
      <section className="home_games">
        <h2>ALL GAMES</h2>
        <ul>
          <Link to="/LOL">
            <li>
              <div className="front_page">
                <img src={frontPageLol} alt="Leagueof legends" />
              </div>
              <p>Descubre tus estadisticas de league of legends</p>
            </li>
          </Link>
          <Link to="/TFT">
            <li>
              <div className="front_page">
                <img src={frontPageTft} alt="Team fight tactics" />
              </div>
              <p>Descubre tus estadisticas de team fight tactics</p>
            </li>
          </Link>
          <Link to="/VAL">
            <li>
              <div className="front_page">
                <img src={frontPageVal} alt="Valorant" />
              </div>
              <p>Descubre tus estadisticas de valorant</p>
            </li>
          </Link>
        </ul>
      </section>
    </section>
  );
};
