import { CardHeader } from "./header/header";
import { CardMainBody } from "./main/body";

export const Card = ({ className, summonerData }) => {
  return (
    <article
      className={className}
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        border: "1px solid black",
        backgroundColor: "rgb(48, 48, 129)",
        color: "antiquewhite",
      }}
    >
      <CardHeader summonerData={summonerData}></CardHeader>
      {summonerData.rank ? (
        <CardMainBody summonerData={summonerData}></CardMainBody>
      ) : (
        <p>No ranked data</p>
      )}
    </article>
  );
};
