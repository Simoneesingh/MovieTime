import { useEffect, useState } from "react";
import requests from "../const/requests";
import useAxios from "../hooks/useAxios";
import PosterCard from "./PosterCard";

const requestKey = {
  Action: "fetchActionMovies",
  Comedy: "fetchComedyMovies",
  Horror: "fetchHorrorMovies",
  Romance: "fetchRomanceMovies",
  Documentary: "fetchDocumentaryMovies",
};

export default function GenreCards({ genre }) {
  const [movies, setMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const key = requestKey[genre];
  const requestUrl = requests[key];
  const { response } = useAxios(requestUrl);
  const initialDisplayCount = 8;

  useEffect(() => {
    if (response) {
      setMovies(response.results);
      setShowLoadMore(true);
    }
  }, [response]);

  useEffect(() => {
    setDisplayedMovies(movies.slice(0, initialDisplayCount));
  }, [movies, initialDisplayCount]);

  function handleLoadMore() {
    setDisplayedMovies(movies.slice(0, 20));
    setShowLoadMore(false);
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-4 p-4">
        {displayedMovies.map((movie, id) => (
          <PosterCard key={id} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        {showLoadMore && (
          <button
            className=" text-white border-b2 border-2 font font-semibold px-4 py-2 rounded-lg hover:scale-110 transition-all ease-in-out"
            onClick={handleLoadMore}
          >
            Show more results . . .
          </button>
        )}
      </div>
    </>
  );
}
