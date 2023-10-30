export default function Pill({ genre, active, onClick }) {
  return (
    <button
      className={`px-[12px] py-[4px] rounded-2xl border-2 border-b2 font text-amber-100 transition-all ease-out hover:scale-110  ${
        active && "bg-b2"
      }`}
      onClick={onClick}
    >
      {genre}
    </button>
  );
}
