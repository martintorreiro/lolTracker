import React, { useState } from "react";
import "./App.css";
import { Title } from "./components/header";
import { Search } from "./components/searchSummoner";
import { Card } from "./components/card";

function App() {
  const [summonerData, setSummonerData] = useState("");

  const RIOT_KEY = "RGAPI-6405e2a8-3113-40cd-9f86-8c22500f5360";

  //http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion/Aatrox.json
  //http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg
  //http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg
  //http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Aatrox.png
  //http://ddragon.leagueoflegends.com/cdn/12.9.1/img/passive/Anivia_P.png
  //http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/item.json
  //http://ddragon.leagueoflegends.com/cdn/12.9.1/img/item/1001.png
  //http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/summoner.json
  //http://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerFlash.png
  //https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/t1kAMEkH_PVZNSv1DtBQUlCZvebVu9pP99BGdsHLGrAQL9dq8ntnuMmqdKKw19PzR-1v5ggZ8XCJtA/ids?type=ranked&start=0&count=10
  //https://europe.api.riotgames.com/lol/match/v5/matches/EUW1_5612324618

  return (
    <>
      <Title className="header" title="League of legends" />

      <main className="contenido">
        <Search setSummonerData={setSummonerData} RIOT_KEY={RIOT_KEY} />

        {summonerData ? (
          <Card className="card" summonerData={summonerData} />
        ) : (
          <> </>
        )}
      </main>
    </>
  );
}

export default App;
