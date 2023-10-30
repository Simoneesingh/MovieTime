import { useState } from "react";
import Pill from "./Pill";
import GenreCards from "./GenreCards";

const genres = ["Action", "Comedy", "Horror", "Romance", "Documentary"];

export default function GenreSelector() {
  const [activeGenre, setActiveGenre] = useState("Action");

  function handleClick(genre) {
    setActiveGenre(genre);
  }

  return (
    <div className="flex flex-col items-center justify-center mt-4 gap-6 ">
      <h1 className="text-white font-bold text-xl m-4 ">
        Find your favourite Genre
      </h1>
      <div className="gap-4 grid grid-cols-3 md:grid-cols-4">
        {genres.map((genre, id) => (
          <Pill
            key={id}
            genre={genre}
            onClick={() => handleClick(genre)}
            active={activeGenre === genre}
          />
        ))}
      </div>
      <div>
        <GenreCards genre={activeGenre} />
      </div>
    </div>
  );
}
