import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useList } from "../context/ListContext";
import { Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function PosterCard({ movie }) {
  const { handleAddToList, handleRemoveFromList, isFavorite } = useList();
  const favorite = isFavorite(movie.id);

  function toggleFavorite() {
    if (favorite) {
      handleRemoveFromList(movie);
    } else {
      handleAddToList(movie);
    }
  }

  return (
    <div className="h-[280px] max-w-[200px] bg-cover cursor-pointer overflow-hidden relative rounded-lg ">
      <Link
        to={`/movies/${encodeURIComponent(
          movie.title || movie.name || movie.original_name
        )}`}
        state={{ movie }}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt={movie.title || movie.name || movie.original_name}
          className="transition-all ease-in hover:scale-105"
          loading="lazy"
        />
      </Link>
      <div className="flex justify-around absolute bottom-0 w-full p-2 text-white font-semibold bg-b1/50">
        {movie.name || movie.original_name || movie.title}
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
  );
}
