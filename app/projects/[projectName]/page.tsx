import { getDocumentDataInCollection } from "@/lib/dbQuery";
import { Button, Container, Typography, Box } from "@mui/material";
import Gallary from "./Gallary";
import Introduction from "./Introduction";
import ProjectDetails from "./ProjectDetails";
import Link from "next/link";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const { projectName } = await params;

  let desktop_images: string[] = [];
  let mobile_images: string[] = [];
  let name = "";
  let requirements = "";
  let background = "";
  let starter_files = "";
  let optional_tasks = "";
  let difficulty = "";
  let model = "";
  let access = "";

  const data = await getDocumentDataInCollection("projects", projectName);

  if (data) {
    desktop_images = data.desktop_images;
    mobile_images = data.mobile_images;
    name = data.name;
    requirements = data.requirements;
    background = data.background;
    starter_files = data.starter_files;
    optional_tasks = data.optional_tasks;
    difficulty = data.difficulty;
    model = data.model;
    access = data.access;
  }

  return (
    <>
      <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Introduction
          name={name}
          model={model}
          difficulty={difficulty}
          access={access}
        />
        <Gallary
          desktop_images={desktop_images}
          mobile_images={mobile_images}
        />
        <ProjectDetails
          requirements={requirements}
          background={background}
          starter_files={starter_files}
          optional_tasks={optional_tasks}
          access={access}
        />
      </Container>
      <Box
        sx={{
          width: "100%",
          minHeight: 300,
          px: 2,
          py: 6,
          textAlign: "center",
          background: `linear-gradient(
                  20deg,
                  rgba(0, 0, 0, 1) 30%,
                  rgba(0, 249, 255, 0.3) 50%,
                  rgba(0, 0, 0, 1) 70%
                ) `,
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          New to Machine Learning?
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0018FF",
            color: "#fff",
            textTransform: "none",
            fontWeight: 600,
            px: 4,
            py: 1.5,
            borderRadius: "999px",
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#0012cc",
            },
          }}
        >
          <Link href="../tutorials">Start Learning with Tutorials</Link>
        </Button>
      </Box>
    </>
  );
}
