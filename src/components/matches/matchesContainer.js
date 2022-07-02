import { MatchesList } from "../matchesList";

export const MatchesContainer = ({ matchesData, summonerData }) => {
  return (
    <div className="last_matches">
      <header>
        <h3>Last games</h3>
      </header>
      <ul className="matches_list">
        {matchesData.map((match) => {
          const ownData = match.info.participants.find(
            (ownData) => ownData.summonerId === summonerData.id
          );

          const gameDate = new Date(match.info.gameStartTimestamp);

          return (
            <MatchesList ownData={ownData} gameDate={gameDate} match={match} />
          );
        })}
      </ul>
    </div>
  );
};
