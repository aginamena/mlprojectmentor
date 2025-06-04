import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function FurtherReading({
  required_reading_link,
  model,
}: {
  required_reading_link: string;
  model: string;
}) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 300,
        px: 2,
        py: 6,
        textAlign: "center",
        background: `linear-gradient(
                  20deg,
                  rgba(0, 0, 0, 1) 30%,
                  rgba(0, 249, 255, 0.3) 50%,
                  rgba(0, 0, 0, 1) 70%
                ) `,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 700,
          mb: 2,
          fontSize: { xs: "1.8rem", md: "2.5rem" },
        }}
      >
        Not Sure How <br />
        {model} Models Work?
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#0018FF",
          color: "#fff",
          textTransform: "none",
          fontWeight: 600,
          px: 4,
          py: 1.5,
          borderRadius: "999px",
          fontSize: "1rem",
          "&:hover": {
            backgroundColor: "#0012cc",
          },
        }}
      >
        <Link href={required_reading_link}>Read this explanation</Link>
      </Button>
    </Box>
  );
}
