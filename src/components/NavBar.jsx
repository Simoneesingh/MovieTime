import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, handleShow] = useState(false);

  const { user, logout } = useAuth();

  useEffect(() => {
    const scrollHandler = () => {
      handleShow(window.scrollY > 100);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div
      className={`w-full text-white flex justify-between px-4 md:px-8 py-2 md:py-4 fixed top-0 z-10 ${
        show && "bg-b1/70"
      }`}
    >
      <ul className="flex gap-4 font-semibold">
        <Link to={"/"} className="text-lg md:text-2xl">
          Home
        </Link>
      </ul>
      <div className="flex flex-col items-center text-lg md:text-2xl">
        <span className="flex items-center gap-4">
          {user.name}

          <button
            className="text-md md:text-lg font-bold p-2 text-b2 rounded-lg bg-b1/50 mt-2 md:mt-0"
            onClick={logout}
          >
            {" "}
            Logout
          </button>
        </span>
      </div>
    </div>
  );
}
