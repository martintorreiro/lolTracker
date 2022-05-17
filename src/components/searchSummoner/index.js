export const Search = ({ setSummonerData, RIOT_KEY }) => {
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const searchText = event.target.elements.search.value;

      let responseByName = await fetch(
        `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchText}?api_key=${RIOT_KEY}`
      );
      responseByName = await responseByName.json();

      let responseBySummoner = await fetch(
        `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${responseByName.id}?api_key=${RIOT_KEY}`
      );
      [responseBySummoner] = await responseBySummoner.json();

      let responseMatchs = await fetch(
        `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${responseByName.puuid}/ids?api_key=${RIOT_KEY}&count=10`
      );
      responseMatchs = await responseMatchs.json();

      const matchesResults = await Promise.all(
        responseMatchs.map(async (match) => {
          const res = await fetch(
            `https://europe.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${RIOT_KEY}`
          );

          return await res.json();
        })
      );

      console.log("-------....-------", responseByName);
      console.log("--------------", matchesResults);

      const resReturn = {
        ...responseByName,
        ...responseBySummoner,
      };

      if (responseBySummoner) {
        const winRate =
          ((responseBySummoner.wins + responseBySummoner.losses) *
            responseBySummoner.wins) /
          100;
        resReturn.winRate = winRate;
      }

      setSummonerData(resReturn);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Enter summoner name</label>
      <input type="search" id="search" name="sarch"></input>
      <button type="submit">search summoner</button>
    </form>
  );
};
