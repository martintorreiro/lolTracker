import { useState } from "react";

import { Search } from "../components/search";
import { Card } from "../components/card";
import { MatchesContainer } from "../components/matches/matchesContainer";
import { TopPlayers } from "../components/topPlayers/topPlayers";
import { NavLol } from "../components/navLol";

export const LolHome = () => {
  const [summonerData, setSummonerData] = useState("");
  const [matchesData, setMatchesData] = useState("");

  return (
    <section>
      <NavLol></NavLol>
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

      <TopPlayers></TopPlayers>
    </section>
  );
};
