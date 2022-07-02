export const Card = ({ summonerData }) => {
  console.log("..", summonerData);
  return (
    <article className="card">
      <header>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/profileicon/${summonerData.profileIconId}.png`}
          alt="icon"
          height="50"
          width="50"
        />
        <p>{summonerData.name}</p>
      </header>
      {summonerData.tier ? (
        <main>
          <div>
            <img
              src={`/ranked-emblems/${summonerData.tier}.png`}
              alt="division icon"
              height="50px"
            />
            <div>
              <p>
                {summonerData.tier} {summonerData.rank}
              </p>
              <p>{summonerData.leaguePoints} Lps</p>
            </div>
          </div>
          <div>
            <p>Win Rate {summonerData.winRate}%</p>
            <small>{`(${summonerData.wins}W / ${summonerData.losses}L)`}</small>
          </div>
        </main>
      ) : (
        <main>
          <p>No clasificado</p>
        </main>
      )}
    </article>
  );
};
