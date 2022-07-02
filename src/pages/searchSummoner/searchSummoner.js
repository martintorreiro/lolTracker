import { useState } from "react";

import { Search } from "../../components/search";
import { Card } from "../../components/card";
import { MatchesContainer } from "../../components/matches/matchesContainer";

export const SearchSummoner = () => {
  const [summonerData, setSummonerData] = useState("");
  const [matchesData, setMatchesData] = useState("");

  return (
    <>
      <Search
        setSummonerData={setSummonerData}
        setMatchesData={setMatchesData}
      />

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
