import { useEffect, useState } from "react";
import { getTopByRegion } from "../services/services";
import { getSummonerSpellName } from "../tools/helppers";

export const useGetTopFiveRegion = (region = "euw1") => {
  const [topListEU, setTopListEU] = useState("");
  const [topListNA, setTopListNA] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const loadTopList = async () => {
      try {
        const topListEuwServ = await getTopByRegion("euw1");
        const topListNaServ = await getTopByRegion("na1");

        setTopListEU(topListEuwServ);
        setTopListNA(topListNaServ);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadTopList();
  }, [region]);

  return { topListEU, topListNA, loading, error };
};
