import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Header() {
  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <Image
        src="/logo.png"
        width={40}
        height={40}
        alt="Machine Learning Project Mentor"
      />
      <Typography
        sx={{ fontStyle: "italic", fontWeight: 700, marginLeft: "10px" }}
      >
        Machine Learning <br />
        Project Mentor
      </Typography>
    </Box>
  );
}
