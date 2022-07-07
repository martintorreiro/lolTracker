import { useModal } from "../hook/useModal";
import { MatchesItems } from "./matches/matchesItems";
import { MatchesRunes } from "./matches/matchesRunes";
import { MatchesStatistics } from "./matches/matchesStatistics";
import { MatchesSummonersList } from "./matches/matchesSummonerList";
import { MatchesSummonerSpells } from "./matches/matchesSummonerSpells";
import { MatchKda } from "./matches/matchKda";
import { OpenMatchModal } from "./openMatchModal/openMatchModal";

export const MatchesList = ({ ownData, gameDate, match }) => {
  const { isOpen, openModal, closeModal } = useModal();
  console.log("---", ownData);
  return (
    <>
      <li
        /* { ownData.win ? className="match_win" : className="match_defeat"} */
        key={Math.round(Math.random() * 1000000)} ///////////////////////////////sustitir por uuid
        className={`match_container ${
          ownData.win ? "match_win" : "match_defeat"
        }`}
        onClick={openModal}
      >
        <MatchesStatistics
          ownData={ownData}
          gameDate={gameDate}
        ></MatchesStatistics>
        <div className="match_body">
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${ownData.championName}.png`}
            alt="champ-avatar"
            height="60px"
          ></img>
          <MatchesSummonerSpells
            spell1={ownData.summoner1Id}
            spell2={ownData.summoner2Id}
            clasName="match_body_component"
          />
          <MatchesRunes
            runes={ownData.perks.styles}
            clasName="match_body_component"
          />

          <MatchesItems
            matchesOwnData={ownData}
            clasName="match_body_component"
          ></MatchesItems>

          <MatchKda ownData={ownData} />

          <MatchesSummonersList
            summonerList={match.info.participants}
          ></MatchesSummonersList>
        </div>
      </li>
      {isOpen ? (
        <OpenMatchModal
          closeModal={closeModal}
          ownData={ownData}
          match={match}
        ></OpenMatchModal>
      ) : (
        <></>
      )}
    </>
  );
};
