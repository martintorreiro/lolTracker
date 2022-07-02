import { getPathRunes } from "../../tools/helppers";

export const MatchesRunes = ({ runes, clasName }) => {
  const paths = getPathRunes(runes);

  return (
    <div className={`match_runes ${clasName}`}>
      <img src={`/${paths.primaryStyleIcon}`} alt="Primary Style rune icon" />
      <img src={`/${paths.subStyleIcon}`} alt="Summoner spell two" />
    </div>
  );
};
