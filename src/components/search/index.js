import { useNavigate } from "react-router-dom";
import "./index.css";

export const Search = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const searchText = event.target.elements.search.value;
    navigate(`/LOL/user-profile/${searchText}`);
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <select name="select">
        <option value="EUW" selected>
          EUW
        </option>
        <option value="NA">NA</option>
        <option value="KOR">KOR</option>
      </select>
      <input type="search" id="search" name="sarch"></input>
      <button type="submit">OK</button>
    </form>
  );
};
