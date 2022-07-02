export const MatchesItems = ({ matchesOwnData, clasName }) => {
  const { item0, item1, item2, item3, item4, item5, item6 } = matchesOwnData;
  const arrItem = [item0, item1, item2, item3, item4, item5, item6];

  return (
    <ul className={`matches_items ${clasName}`}>
      {arrItem.map((item) => {
        if (item === 0) {
          return <li key={Math.round(Math.random() * 1000000)}></li>;
        } else {
          return (
            <li key={Math.round(Math.random() * 1000000)}>
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/item/${item}.png`}
                alt="icon"
              ></img>
            </li>
          );
        }
      })}
    </ul>
  );
};
