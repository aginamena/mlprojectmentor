import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        justifyContent: "space-between",
        py: 8,
        px: 4,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="Machine Learning Project Mentor"
        />
        <Typography
          sx={{ fontStyle: "italic", fontWeight: 700, marginLeft: "10px" }}
        >
          <Link href="/">
            Machine Learning
            <br />
            Project Mentor
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
