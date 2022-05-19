import "./index.css";

export const Search = ({
  setSummonerData,
  setMatchesOwnData,
  setMatchesData,
  RIOT_KEY,
}) => {
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const searchText = event.target.elements.search.value;

      let responseByName = await fetch(
        `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchText}?api_key=${RIOT_KEY}`
      );
      responseByName = await responseByName.json();

      let responseBySummonerId = await fetch(
        `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${responseByName.id}?api_key=${RIOT_KEY}`
      );
      [responseBySummonerId] = await responseBySummonerId.json();

      let responseMatches = await fetch(
        `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${responseByName.puuid}/ids?api_key=${RIOT_KEY}&count=15`
      );
      responseMatches = await responseMatches.json();

      const matchesResults = await Promise.all(
        responseMatches.map(async (match) => {
          const res = await fetch(
            `https://europe.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${RIOT_KEY}`
          );

          return await res.json();
        })
      );
      console.log(matchesResults);
      const matchesSummonersInfo = matchesResults.map(
        (match) => match.info.participants
      );

      const matchesOwnInfo = matchesSummonersInfo.map((match) => {
        const [myMatches] = match.filter(
          (player) => player.summonerId === responseByName.id
        );
        return myMatches;
      });

      console.log(responseBySummonerId);

      const resReturn = {
        ...responseByName,
        ...responseBySummonerId,
      };

      if (responseBySummonerId) {
        const winRate = Math.round(
          (responseBySummonerId.wins * 100) /
            (responseBySummonerId.wins + responseBySummonerId.losses)
        );
        resReturn.winRate = winRate;
      }

      setSummonerData(resReturn);
      setMatchesData(matchesResults);
      setMatchesOwnData(matchesOwnInfo);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input autoFocus type="search" id="search" name="sarch"></input>
      <button type="submit">ok</button>
    </form>
  );
};
