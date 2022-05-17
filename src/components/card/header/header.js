import foto21 from "../../../ranked-emblems/Emblem_Gold.png";
import "./index.css";
import { CardMainHeader } from "./title";
export const CardHeader = ({ summonerData }) => {
  return (
    <header className="fotos">
      <CardMainHeader summonerData={summonerData}></CardMainHeader>
      <div>
        <img
          className="avatar"
          width="120"
          height="120"
          src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/profileicon/${summonerData.profileIconId}.png`}
          alt="avatar"
        ></img>
        <img
          className="rank"
          width="40"
          height="40"
          src={foto21}
          alt="avatar"
        ></img>
      </div>
    </header>
  );
};
