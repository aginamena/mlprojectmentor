import { getDifficultyBorderColor } from "@/app/projects/util";
import { Box, Typography, Stack } from "@mui/material";

export default function MetaChips({
  model,
  difficulty,
  access,
}: {
  model: string;
  difficulty: string;
  access: string;
}) {
  return (
    <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
      <Box
        sx={{
          backgroundColor: "#2e2e2e",
          color: "#aaa",
          width: "fit-content",
          display: "flex",
          alignItems: "center",
          px: 1.5,
          py: 0.5,
          borderRadius: "1px",
          fontWeight: 500,
          fontSize: "0.75rem",
        }}
      >
        Model
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "#E37724",
            color: "#fff",
            px: 1.5,
            py: 0.5,
            marginLeft: "10px",
            borderRadius: "1px",
            fontWeight: 500,
            fontSize: "0.75rem",
          }}
        >
          {model.toUpperCase()}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#2e2e2e",
          color: "#aaa",
          display: "flex",
          width: "fit-content",
          alignItems: "center",
          px: 1.5,
          py: 0.5,
          borderRadius: "1px",
          fontWeight: 500,
          fontSize: "0.75rem",
        }}
      >
        Difficulty
        <Typography
          variant="body2"
          sx={{
            backgroundColor: getDifficultyBorderColor(difficulty),
            color: "#fff",
            px: 1.5,
            py: 0.5,
            marginLeft: "10px",
            borderRadius: "1px",
            fontWeight: 500,
            fontSize: "0.75rem",
          }}
        >
          {difficulty.toUpperCase()}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#2e2e2e",
          color: "#aaa",
          display: "flex",
          width: "fit-content",
          alignItems: "center",
          px: 1.5,
          py: 0.5,
          borderRadius: "1px",
          fontWeight: 500,
          fontSize: "0.75rem",
        }}
      >
        Access
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "#069348",
            color: "#fff",
            px: 1.5,
            py: 0.5,
            marginLeft: "10px",
            borderRadius: "1px",
            fontWeight: 500,
            fontSize: "0.75rem",
          }}
        >
          {access.toUpperCase()}
        </Typography>
      </Box>
    </Stack>
  );
}
