const RIOT_KEY = process.env.REACT_APP_KEY_LOL;

export const getTopByRegion = async (region) => {
  let players = await fetch(
    `https://${region}.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=${RIOT_KEY}`
  );
  players = await players.json();

  const arrOrder = players.entries.sort(
    (a, b) => b.leaguePoints - a.leaguePoints
  );

  const top5Players = arrOrder.slice(0, 1);

  const result = await Promise.all(
    top5Players.map(async (summoner) => {
      const res = await profileDataService(summoner.summonerName, region);

      return res;
    })
  );
  return result;
};

export const profileDataService = async (searchText, region = "euw1") => {
  let responseByName = await fetch(
    `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchText}?api_key=${RIOT_KEY}`
  );
  responseByName = await responseByName.json();

  let responseBySummonerId = await fetch(
    `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${responseByName.id}?api_key=${RIOT_KEY}`
  );

  responseBySummonerId = await responseBySummonerId.json();
  [responseBySummonerId] = responseBySummonerId.sort(
    (a, b) => b.leaguePoints - a.leaguePoints
  );

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

  return resReturn;
};

export const lastMatchesService = async (puuid) => {
  let responseMatches = await fetch(
    `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?api_key=${RIOT_KEY}&count=15`
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

  return matchesResults;
};
