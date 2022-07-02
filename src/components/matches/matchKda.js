export const MatchKda = ({ ownData }) => {
  const kda =
    Math.round(
      ((ownData.kills + ownData.assists) /
        (Number(ownData.deaths) < 1 ? 1 : ownData.deaths)) *
        10
    ) / 10;
  console.log(ownData);
  return (
    <div className=" match_body_component match_kda">
      <p>
        {ownData.kills}/{ownData.deaths}/{ownData.assists}
      </p>
      <p>KDA {kda}</p>
    </div>
  );
};
