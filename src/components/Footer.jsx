import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Link } from "@mui/material";

export default function Footer() {
  const githubProfileUrl = "https://github.com/Simoneesingh";

  return (
    <div className="flex flex-col gap-2 bg-gray-700/30 text-white justify-center items-center p-4  border-t border-white">
      <Link href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
        <GitHubIcon className="hover:scale-110 " />
      </Link>
      <Box className="flex p-2 font-semibold border-2 border-gray-300 text-b2/80 m-2">
        Made By Simone Singh
      </Box>
    </div>
  );
}
