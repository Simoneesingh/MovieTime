import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import requests from "../const/requests";
import { useList } from "../context/ListContext";
import { Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import GenrePills from "./GenrePills";

export default function HomeBanner() {
  const [movie, setMovie] = useState([]);
  const { response } = useAxios(requests.fetchTrending);
  const { list, handleAddToList, handleRemoveFromList, isFavorite } = useList();

  useEffect(() => {
    if (response) {
      const randomMovieIndex = response
        ? Math.floor(Math.random() * response.results.length - 1)
        : null;
      const randomMovie = response.results[randomMovieIndex];
      setMovie(randomMovie);
    }
  }, [response, list]);

  const favorite = isFavorite(movie?.id);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function toggleFavorite() {
    if (favorite) {
      handleRemoveFromList(movie);
    } else {
      handleAddToList(movie);
    }
  }

  if (!movie) {
    return <Loader />;
  }

  return (
    <>
      <div
        className="bg-cover relative bg-center h-[450px]"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-b1">
          <div className="absolute bottom-[4rem] left-12  text-white">
            <h1 className="md:text-3xl text-2xl md:max-w-[24rem] max-w-[48rem] font-bold m-4">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            {movie && movie?.genre_ids && <GenrePills id={movie?.genre_ids} />}
            <p className="text-xs md:text-sm max-w-md mb-4 mt-4 text-gray-300 ">
              {truncate(movie?.overview, 150)}
            </p>
            <div className="flex items-center gap-4">
              <Link
                to={`/movies/${encodeURIComponent(
                  movie?.title || movie?.name || movie?.original_name
                )}`}
                state={{ movie }}
                className="px-2 py-2 text-sm font-bold transition-all ease-in border-2 border-b2 shadow-lg md:text-base md:px-4 rounded-3xl hover:bg-b2"
              >
                Watch now
              </Link>
              {favorite ? (
                <Favorite
                  className="text-b2 cursor-pointer"
                  onClick={toggleFavorite}
                />
              ) : (
                <FavoriteBorderIcon
                  className="cursor-pointer hover:text-b2"
                  onClick={toggleFavorite}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
