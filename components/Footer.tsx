import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        backgroundColor: "#0f0f0f",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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
          Machine Learning <br />
          Project Mentor
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ marginRight: "20px" }}>
          <Link href="mailto:aginamena5@gmail.com">
            <EmailIcon />
          </Link>
        </Box>
        <Box>
          <Link href="https://www.facebook.com/share/g/16ScKkia3h/">
            <FacebookIcon />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
