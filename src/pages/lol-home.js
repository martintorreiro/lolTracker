import { Search } from "../components/search";

import { TopPlayers } from "../components/topPlayers/topPlayers";
import { NavLol } from "../components/navLol";

export const LolHome = () => {
  return (
    <section>
      <NavLol></NavLol>
      <section className="search_container">
        <Search />

        <TopPlayers></TopPlayers>
      </section>
    </section>
  );
};
