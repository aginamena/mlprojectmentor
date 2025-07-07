import { getAllDocumentsDataInCollection } from "@/lib/dbQuery";
import { Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

export default async function Projects() {
  const projects = await getAllDocumentsDataInCollection("projects");

  return (
    <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 2,
        }}
      >
        PROJECTS
      </Typography>
      <Typography
        variant="body2"
        sx={{
          maxWidth: "600px",
          lineHeight: 1.6,
          marginBottom: "40px",
        }}
      >
        These projects are designed to show you what you can do with machine
        learning. After completing a project, you will learn how to apply
        machine learning to solve specific problems in the world.
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {projects
          .filter((project) => project.is_live)
          .map((project) => (
            <Grid size={{ xs: 12, sm: 6 }} key={project.name}>
              <ProjectCard
                access={project.access}
                background={project.background}
                model={project.model}
                new_project={project.new_project}
                name={project.name}
                difficulty={project.difficulty}
                thumbnail={project.thumbnail}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
