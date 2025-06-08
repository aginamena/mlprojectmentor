import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import ZipFiles from "./ZipFiles";

export default function ProjectDetails({
  requirements,
  background,
  starter_files,
  optional_tasks,
  images,
}: {
  requirements: string;
  background: string;
  starter_files: string;
  optional_tasks: string;
  images: string[];
}) {
  return (
    <Grid container spacing={3} sx={{ p: { xs: 2, md: 4 } }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Paper
          elevation={3}
          sx={{ p: 3, backgroundColor: "#1e1e1e", color: "white" }}
        >
          <Stack direction="row" alignItems="center" spacing={1} mb={1}>
            <Typography fontSize={18} fontWeight={600}>
              📄 Background
            </Typography>
          </Stack>
          <Typography style={{ fontSize: "15px" }}>{background}</Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            mt: 3,
            p: 3,
            backgroundColor: "#1e1e1e",
            color: "white",
            display: { xs: "block", md: "none" },
          }}
        >
          <Typography fontSize={18} fontWeight={600} mb={2}>
            📋 Requirements
          </Typography>
          <Box
            dangerouslySetInnerHTML={{ __html: requirements }}
            style={{ fontSize: "15px" }}
          />
        </Paper>
        <Paper
          elevation={3}
          sx={{ p: 3, mt: 3, backgroundColor: "#1e1e1e", color: "white" }}
        >
          <Stack direction="row" alignItems="center" spacing={1} mb={1}>
            <Typography fontSize={18} fontWeight={600}>
              📦 Starter files
            </Typography>
          </Stack>
          <Box
            dangerouslySetInnerHTML={{ __html: starter_files }}
            style={{ fontSize: "15px" }}
          />
        </Paper>
        <Paper
          elevation={3}
          sx={{ p: 3, mt: 3, backgroundColor: "#1e1e1e", color: "white" }}
        >
          <Typography fontSize={18} fontWeight={600} mb={1}>
            💡 Optional tasks
          </Typography>
          <Box
            dangerouslySetInnerHTML={{ __html: optional_tasks }}
            style={{ fontSize: "15px" }}
          />
        </Paper>
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            backgroundColor: "#1e1e1e",
            color: "white",
          }}
        >
          <Typography fontSize={18} fontWeight={600} mb={2}>
            📋 Requirements
          </Typography>
          <Box
            dangerouslySetInnerHTML={{ __html: requirements }}
            style={{ fontSize: "15px" }}
          />
        </Paper>
      </Grid>
      <Box style={{ textAlign: "center", width: "100%" }}>
        <ZipFiles images={images} />
      </Box>
    </Grid>
  );
}
