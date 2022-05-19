export const CardHeader = ({ summonerData }) => {
  return (
    <header
      className="fotos"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{summonerData.name} </h2>
      <img
        className="avatar"
        width="70"
        height="70"
        src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/profileicon/${summonerData.profileIconId}.png`}
        alt="avatar"
        style={{ borderRadius: "50%" }}
      ></img>
      <h3>Lvl {summonerData.summonerLevel}</h3>
    </header>
  );
};
