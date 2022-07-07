export const MatchesSummonersList = ({ summonerList }) => {
  const teamRed = summonerList.filter((summoner) => summoner.teamId === 200);
  const teamBlue = summonerList.filter((summoner) => summoner.teamId === 100);

  return (
    <div className="summoners_list">
      <ul>
        <div
          className="red_box"
          style={{ height: "25px", width: "10px", backgroundColor: "red" }}
        ></div>
        {teamRed.map((summoner) => {
          if (summoner.championName === "FiddleSticks") {
            summoner.championName = "Fiddlesticks";
          }

          return (
            <li key={Math.round(Math.random() * 1000000)}>
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${summoner.championName}.png`}
                alt={summoner.championName}
                style={{ width: "25px", height: "25px" }}
              ></img>
            </li>
          );
        })}
      </ul>
      <ul>
        <div
          className="blue_box"
          style={{ height: "25px", width: "10px", backgroundColor: "blue" }}
        ></div>
        {teamBlue.map((summoner) => {
          return (
            <li key={Math.round(Math.random() * 1000000)}>
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${summoner.championName}.png`}
                alt={summoner.championName}
                style={{ width: "25px", height: "25px" }}
              ></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
