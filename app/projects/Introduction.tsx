import MetaChips from "@/components/Metachips";
import { Box, Typography } from "@mui/material";
import ZipFiles from "./ZipFiles";

export default function Introduction({
  name,
  model,
  difficulty,
  images,
}: {
  name: string;
  model: string;
  difficulty: string;
  images: string[];
}) {
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
          {name}
        </Typography>
        <ZipFiles images={images} />
      </Box>
      <Box maxWidth={400}>
        <MetaChips model={model} difficulty={difficulty} />
        <Typography fontSize={15} style={{ marginTop: "20px" }}>
          You are free to use any tools to build this project, as long as you
          meet all the given design requirements. Once you’ve completed the
          requirements and want to challenge yourself further, consider working
          on the optional tasks to increase the difficulty.
        </Typography>
      </Box>
    </Box>
  );
}
