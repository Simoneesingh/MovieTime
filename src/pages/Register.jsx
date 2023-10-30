import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import loginBackground from "../asset/login-bg.jpg";
import { Box } from "@mui/material";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    login({ name, email, password });
    navigate("/");
  }

  return (
    <div
      className="flex flex-col items-center justify-center h-screen gap-4 px-8 overflow-hidden"
      style={{
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: "cover",
      }}
    >
      <Box className="p-4 rounded-lg shadow-md" sx={{ maxWidth: 400 }}>
        <Box className="mb-4 bg-b1/90 rounded-3xl p-4">
          <h1 className="max-w-sm text-2xl font-extrabold text-center text-white  md:text-4xl">
            MovieTime
          </h1>
        </Box>
      </Box>

      <Box
        className="bg-b2/80 p-8 rounded-lg shadow-md flex flex-col items-center"
        sx={{ maxWidth: 400 }}
      >
        <h2 className="font-extrabold text-b1 text-3xl mb-4">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-6 m-4">
          <Input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-b1 hover:scale-110 hover:bg-b1 border-2 rounded-3xl p-[2px] px-4 py-2 text-white hover:text-white font-bold transition-all ease-in-out"
          >
            Register Now
          </button>
        </form>
      </Box>
    </div>
  );
}
