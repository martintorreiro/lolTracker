import summonerSpellsList from "../summonerSpells.json";
import runesReforged from "../runesReforged.json";

export const getSummonerSpellName = (key1, key2) => {
  const spell1 = summonerSpellsList.find((item) => Number(item.key) === key1);
  const name1 = spell1.id;
  const spell2 = summonerSpellsList.find((item) => Number(item.key) === key2);
  const name2 = spell2.id;

  return { name1, name2 };
};

export const getPathRunes = (value) => {
  const primaryStyle = runesReforged.find((item) => item.id === value[0].style);
  const primaryStyleIcon = primaryStyle.icon;
  const subStyle = runesReforged.find((item) => item.id === value[1].style);
  const subStyleIcon = subStyle.icon;

  return { primaryStyleIcon, subStyleIcon };
};
