import { useGetTopFiveRegion } from "../../hook/useGetTopFiveRegion";
import { Card } from "../card";

export const TopPlayers = () => {
  const { topListEU, topListNA, loading, error } = useGetTopFiveRegion();
  if (loading) return <p>Loading / Cargando</p>;

  if (error) return <p>{error}</p>;

  return (
    <ul>
      <li>North América </li>
      <li>EU West</li>
      <li>Korea</li>

      {/*  <ol>
        {topListEU.map((summoner) => (
          <li key={summoner.id}>
            <Card summonerData={summoner}></Card>
          </li>
        ))}
      </ol>
      <ol>
        {topListNA.map((summoner) => (
          <li key={summoner.id}>
            <Card summonerData={summoner}></Card>
          </li>
        ))}
      </ol> */}
    </ul>
  );
};
