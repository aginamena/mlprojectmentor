import { Box, Chip, Typography } from "@mui/material";
import Stats from "./Stats";

export default function Introduction() {
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Chip
        label="Top rated"
        sx={{ bgcolor: "#21252F" }}
        style={{ marginRight: "10px" }}
      />
      <Chip label="Beginner-friendly" sx={{ bgcolor: "#21252F" }} />

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={1}
        style={{ marginTop: "20px", marginBottom: "15px" }}
      >
        Machine Learning Tutorials
      </Typography>

      <Typography variant="body2" color="gray" mb={3}>
        Welcome to the tutorials section! We are glad to have you here. We have
        gathered everything you need to start building machine learning
        applications.
      </Typography>
      <Stats />
    </Box>
  );
}
