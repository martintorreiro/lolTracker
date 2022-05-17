import { CardHeader } from "./header/header";
import { CardMain } from "./main/main";

export const Card = ({ className, summonerData }) => {
  return (
    <article className={className}>
      <CardHeader summonerData={summonerData}></CardHeader>
      <CardMain summonerData={summonerData}></CardMain>
    </article>
  );
};
