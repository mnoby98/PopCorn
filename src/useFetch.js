import { useEffect, useState } from "react";

const KEY = "d1031c06";

export function useKey(selectedID) {
  const [movie, setMvoie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
        );
        const data = await res.json();
        setMvoie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedID]
  );
  return [isLoading, movie];
}
