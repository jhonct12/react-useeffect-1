import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("useFetch");
  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(url);

      if (!res.ok) throw new Error("Error al consumir el api");

      const dataRes = await res.json();
      setData(dataRes);
    } catch (err) {
      console.log(err.message);
      setData([]);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};
