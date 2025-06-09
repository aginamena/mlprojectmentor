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
}: {
  access: string;
  background: string;
  model: string;
  name: string;
  difficulty: string;
  thumbnail: string;
}) {
  return (
    <Link href={`projects/${name.toLowerCase().replaceAll(" ", "_")}`}>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: 20,
            left: 0,
            bgcolor: "#069348",
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
            style={{ padding: "16px" }}
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
              {background}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Link>
  );
}
