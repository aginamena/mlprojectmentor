import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import { getDifficultyBorderColor } from "./util";
export default function ProjectCard({
  access,
  background,
  model,
  name,
  difficulty,
  thumbnail,
  new_project,
}: {
  access: string;
  background: string;
  model: string;
  name: string;
  difficulty: string;
  thumbnail: string;
  new_project: boolean;
}) {
  const backgroundSize = 300;
  return (
    <Link href={`projects/${name.toLowerCase().replaceAll(" ", "_")}`}>
      {new_project && (
        <Box
          display="inline-flex"
          alignItems="center"
          gap={1}
          px={1.5}
          py={0.5}
          borderRadius="8px"
          bgcolor="rgba(245, 158, 11, 0.15)"
          // "#FFE0A3"
        >
          <AutoAwesomeIcon fontSize="small" sx={{ color: "#FFA600" }} />
          <Typography fontSize="14px" fontWeight="600" color="#FFA600">
            New Project
          </Typography>
        </Box>
      )}

      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: 20,
            left: 0,
            bgcolor: access == "Premium" ? "#002AC1" : "#069348",
            color: "white",
            px: 1.5,
            width: "100px",
            py: 0.5,
            fontWeight: "bold",
            fontSize: "0.75rem",
            borderBottomRightRadius: "6px",
            textAlign: "center",
          }}
        >
          {access}
        </Box>
        <Card
          sx={{
            bgcolor: "#1B1D25",
            color: "white",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            height="160"
            image={`${thumbnail}`}
            alt={name}
            style={{ padding: "16px", height: "400px" }}
          />
          <CardContent sx={{ padding: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                {model.toUpperCase()}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  border: `2px solid ${getDifficultyBorderColor(difficulty)}`,
                  borderLeft: `10px solid ${getDifficultyBorderColor(
                    difficulty
                  )}`,
                  textAlign: "center",
                  width: "80px",
                }}
              >
                {difficulty.toUpperCase()}
              </Typography>
            </Box>
            <Typography
              variant="h6"
              component="div"
              gutterBottom
              sx={{ textTransform: "capitalize" }}
            >
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#C3C3C3" }}>
              {background.length <= backgroundSize
                ? background
                : `${background.slice(0, backgroundSize)}...`}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Link>
  );
}
