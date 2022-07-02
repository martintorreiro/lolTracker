export const MatchesStatistics = ({ ownData, gameDate }) => {
  return (
    <div className="match_header">
      <p>{gameDate.toDateString()}</p>

      <p>{ownData.role}</p>

      <p>{ownData.win ? "victory" : "defeat"}</p>
    </div>
  );
};
