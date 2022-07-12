import { useParams } from "react-router-dom";
import { Card } from "../components/card";
import { MatchesContainer } from "../components/matches/matchesContainer";
import { useGetProfileLol } from "../hook/useGetProfileLol";

export const UserProfile = () => {
  const { user } = useParams();
  const { summonerData, matchesData, loading, error } = useGetProfileLol(user);

  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      {summonerData ? (
        <Card className="card" summonerData={summonerData} />
      ) : (
        <> </>
      )}

      {matchesData ? (
        <MatchesContainer
          summonerData={summonerData}
          matchesData={matchesData}
        ></MatchesContainer>
      ) : (
        <></>
      )}
    </>
  );
};
