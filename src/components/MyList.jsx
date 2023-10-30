import { useList } from "../context/ListContext";
import PosterCard from "./PosterCard";

export default function MyList() {
  const { list } = useList();

  return (
    <>
      <h1 className="text-white font-bold text-3xl ml-8 mb-4">My List</h1>
      <div className="text-white flex gap-4 h-[300px] cursor-pointer overflow-hidden relative rounded-lg  ">
        {list.map((movie) => (
          <div className="md:min-w-[200px] min-w-[160px]" key={movie.id}>
            <PosterCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
}
