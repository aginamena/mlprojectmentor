import { Box, Stack, Typography } from "@mui/material";

export default function Stats() {
  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <Box style={{ marginRight: "30px" }}>
        <Stack spacing={0.5}>
          <Typography variant="subtitle2" color="gray">
            Enrollments
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            300 Developers
          </Typography>
        </Stack>
      </Box>
      <Box>
        <Stack spacing={0.5}>
          <Typography variant="subtitle2" color="gray">
            Duration
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            50 Mins
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
