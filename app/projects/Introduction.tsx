import MetaChips from "@/components/Metachips";
import { Box, Typography, Button } from "@mui/material";
import ZipFiles from "./ZipFiles";

export default function Introduction() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
      style={{ marginBottom: "60px" }}
    >
      <Box>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
        >
          Customer <br />
          Feedback Analysis
        </Typography>
        <ZipFiles />
      </Box>
      <Box maxWidth={400}>
        <MetaChips />
        <Typography fontSize={14} style={{ marginTop: "20px" }}>
          You are free to use any tools to build this project, as long as you
          meet all the given design requirements. Once you’ve completed the
          requirements and want to challenge yourself further, consider working
          on the optional tasks to increase the difficulty.
        </Typography>
      </Box>
    </Box>
  );
}
