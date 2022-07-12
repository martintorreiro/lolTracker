import { useEffect, useState } from "react";
import { lastMatchesService, profileDataService } from "../services/services";

export const useGetProfileLol = (searchText) => {
  const [summonerData, setSummonerData] = useState("");
  const [matchesData, setMatchesData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profileData = await profileDataService(searchText);

        const lastMatches = await lastMatchesService(profileData.puuid);
        console.log("searchText", lastMatches);
        setSummonerData(profileData);
        setMatchesData(lastMatches);
        console.log("puuid", profileData, lastMatches);
      } catch (err) {
        console.log("error", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, [searchText]);

  return { summonerData, matchesData, loading, error };
};
