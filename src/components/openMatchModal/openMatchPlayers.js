import { MatchesItems } from "../matches/matchesItems";
import { MatchesRunes } from "../matches/matchesRunes";
import { MatchesSummonerSpells } from "../matches/matchesSummonerSpells";
import { MatchKda } from "../matches/matchKda";

export const OpenMatchPlayers = ({ participants }) => {
  return (
    <div>
      <ul className="red_team open_match_teams">
        <h3>Red side</h3>
        {participants.map((participant) => {
          if (participant.teamId === 200) {
            return (
              <li className="open_match_participant">
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${participant.championName}.png`}
                  alt="champ-avatar"
                  height="35px"
                ></img>
                <MatchesSummonerSpells
                  spell1={participant.summoner1Id}
                  spell2={participant.summoner2Id}
                  clasName="open_match_component"
                ></MatchesSummonerSpells>
                <MatchesRunes
                  runes={participant.perks.styles}
                  clasName="open_match_component"
                />
                <p style={{ minWidth: 140, textAlign: "center" }}>
                  {participant.summonerName}
                </p>
                <MatchKda ownData={participant} />
                <MatchesItems
                  matchesOwnData={participant}
                  clasName="open_match_items"
                ></MatchesItems>
              </li>
            );
          } else {
            return <></>;
          }
        })}
      </ul>
      <ul className="blue_team open_match_teams">
        <h3>Blue side</h3>
        {participants.map((participant) => {
          if (participant.teamId === 100) {
            return (
              <li className="open_match_participant">
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${participant.championName}.png`}
                  alt="champ-avatar"
                  height="35px"
                ></img>
                <MatchesSummonerSpells
                  spell1={participant.summoner1Id}
                  spell2={participant.summoner2Id}
                  clasName="open_match_component"
                ></MatchesSummonerSpells>
                <MatchesRunes
                  runes={participant.perks.styles}
                  clasName="open_match_component"
                />
                <p style={{ minWidth: 140, textAlign: "center" }}>
                  {participant.summonerName}
                </p>
                <MatchKda ownData={participant} />
                <MatchesItems
                  matchesOwnData={participant}
                  clasName="open_match_items"
                ></MatchesItems>
              </li>
            );
          } else {
            return <></>;
          }
        })}
      </ul>
    </div>
  );
};
