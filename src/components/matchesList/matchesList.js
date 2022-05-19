export const MatchesList = ({ matchesOwnData }) => {
  return (
    <li
      key={matchesOwnData.champExperience}
      style={{ display: "flex", margin: "8px" }}
    >
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${matchesOwnData.championName}.png`}
        alt="champ-avatar"
      ></img>
      <div>
        <p>{matchesOwnData.championName}</p>
        <p>{matchesOwnData.role}</p>
        <p>
          KDA
          <span>
            {matchesOwnData.kills}/{matchesOwnData.deaths}/
            {matchesOwnData.kills}
          </span>
        </p>
        <p>{matchesOwnData.win ? "win" : "lost"}</p>
      </div>
    </li>
  );
};
