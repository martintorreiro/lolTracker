import { Link } from "react-router-dom";

export const NavLol = () => {
  return (
    <header>
      <nav>
        <ul className="nav_lol">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/">
            <li>Leaderboard</li>
          </Link>
          <Link to="/">
            <li>Champions</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
