import { Box, Typography, Stack } from "@mui/material";

export default function MetaChips({
  model,
  difficulty,
}: {
  model: string;
  difficulty: string;
}) {
  return (
    <Stack direction="row" spacing={2}>
      <Box display="flex" alignItems="center">
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "#2e2e2e",
            color: "#aaa",
            px: 1.5,
            py: 0.5,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            fontWeight: 500,
            fontSize: "0.75rem",
          }}
        >
          Model
        </Typography>
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "#444",
            color: "#fff",
            px: 1.5,
            py: 0.5,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            fontWeight: 500,
            fontSize: "0.75rem",
          }}
        >
          {model}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "#2e2e2e",
            color: "#aaa",
            px: 1.5,
            py: 0.5,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            fontWeight: 500,
            fontSize: "0.75rem",
          }}
        >
          Difficulty
        </Typography>
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "#444",
            color: "#fff",
            px: 1.5,
            py: 0.5,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            fontWeight: 500,
            fontSize: "0.75rem",
          }}
        >
          {difficulty}
        </Typography>
      </Box>
    </Stack>
  );
}
