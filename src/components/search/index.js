import {
  lastMatchesService,
  profileDataService,
} from "../../services/services";
import "./index.css";

export const Search = ({
  setSummonerData,
  setMatchesOwnData,
  setMatchesData,
}) => {
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const searchText = event.target.elements.search.value;

      const profileData = await profileDataService(searchText);

      const lastMatches = await lastMatchesService(profileData.puuid);

      setSummonerData(profileData);
      setMatchesData(lastMatches);
    } catch (error) {
      console.log(error.message);
      return <p>{error.message}</p>;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input autoFocus type="search" id="search" name="sarch"></input>
      <button type="submit">ok</button>
    </form>
  );
};
