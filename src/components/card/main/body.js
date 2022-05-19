export const CardMainBody = ({ summonerData }) => {
  return (
    <>
      <main>
        <p>
          <span>{summonerData.tier}</span> {summonerData.rank}{" "}
          <span>
            <img
              className="rank"
              width="30"
              height="30"
              src={`ranked-emblems/${summonerData.tier}.png`}
              alt="avatar"
            ></img>
          </span>
        </p>

        <p>{summonerData.leaguePoints} LPs</p>
        <p>
          win rate: {summonerData.winRate} % ({summonerData.wins}/
          {summonerData.losses})
        </p>
      </main>
    </>
  );
};
