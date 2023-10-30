import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-extrabold text-b2 md:text-4xl">
        OOPS! Nothing to show here..
      </h1>
      <button
        className="text-xl p-2 font-bold text-gray-600 border-2 border-b2 md:text-3xl md:px-4 rounded-xl hover:border-white"
        onClick={() => navigate(-1)}
      >
        {" "}
        Go Back..
      </button>
    </div>
  );
}
