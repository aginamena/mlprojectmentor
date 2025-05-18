import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function JoinFbCommunity({ header }: { header: string }) {
  return (
    <Box
      sx={{
        backgroundImage: "url('/joinOurCommunityImage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        minHeight: 350,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "#fff",
          maxWidth: 700,
          px: 2,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          {header}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Join our community of builders to ask questions, <br />
          share ideas, and collaborate with others just like you.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: "999px",
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
          }}
        >
          <Link href="https://www.facebook.com/share/g/16ScKkia3h/">
            Join our Facebook community
          </Link>
        </Button>
      </Box>
    </Box>
  );
}
