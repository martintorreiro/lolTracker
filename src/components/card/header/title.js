export const CardMainHeader = ({ summonerData }) => {
  return (
    <div>
      <h2>{summonerData.name} </h2>
      <h3>Lvl {summonerData.summonerLevel}</h3>
    </div>
  );
};
