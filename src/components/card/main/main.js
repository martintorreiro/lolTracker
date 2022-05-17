import { CardMainBody } from "./body.js";

export const CardMain = ({ summonerData }) => {
  return (
    <main>
      {summonerData.rank ? (
        <CardMainBody userStats={summonerData}></CardMainBody>
      ) : (
        <p>sin clasificar</p>
      )}
    </main>
  );
};
