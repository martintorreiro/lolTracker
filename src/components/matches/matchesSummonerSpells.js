import { getSummonerSpellName } from "../../tools/helppers";

export const MatchesSummonerSpells = ({ spell1, spell2, clasName }) => {
  const { name1, name2 } = getSummonerSpellName(spell1, spell2);

  return (
    <div className={`summoner_spells  ${clasName}`}>
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/${name1}.png`}
        alt="Summoner spell one"
      />
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/${name2}.png`}
        alt="Summoner spell two"
      />
    </div>
  );
};
