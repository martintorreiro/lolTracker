export const CardMainBody = ({ userStats }) => {
  return (
    <>
      <p>
        {userStats.tier} {userStats.rank}
      </p>
      <p>{userStats.leaguePoints} LPs</p>
      <p>
        win rate: {userStats.winRate} ({userStats.wins}/{userStats.losses})
      </p>
    </>
  );
};
