import React, { useState } from "react";
import "./App.css";
import { Title } from "./components/header";
import { Search } from "./components/searchSummoner";
import { Card } from "./components/card";
import { MatchesList } from "./components/matchesList/matchesList";

function App() {
  const [summonerData, setSummonerData] = useState("");
  const [matchesOwnData, setMatchesOwnData] = useState("");
  const [matchesData, setMatchesData] = useState("");

  const RIOT_KEY = "RGAPI-9aa2feb5-b33f-407c-880c-fdd4ee05e58d";

  console.log(matchesOwnData);
  return (
    <>
      <Title className="header" title="League of legends" />

      <main className="contenido">
        <Search
          setSummonerData={setSummonerData}
          setMatchesOwnData={setMatchesOwnData}
          setMatchesData={setMatchesData}
          RIOT_KEY={RIOT_KEY}
        />

        {summonerData ? (
          <Card className="card" summonerData={summonerData} />
        ) : (
          <> </>
        )}

        {matchesOwnData ? (
          <ol>
            {matchesOwnData.map((match) => (
              <MatchesList
                matchesOwnData={match}
                key={match.champExperience}
              ></MatchesList>
            ))}
          </ol>
        ) : (
          <></>
        )}
      </main>
    </>
  );
}

export default App;
