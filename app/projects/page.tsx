import { db } from "@/lib/firebase";
import { Container, Grid, Typography } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import ProjectCard from "./ProjectCard";

type Project = {
  access: string;
  background: string;
  model: string;
  name: string;
  difficulty: string;
  thumbnail: string;
  desktop_images: string[];
  // Add any other properties your project objects have
};
export default async function Projects() {
  const projects: Project[] = [];
  const querySnapshot = await getDocs(collection(db, "projects"));

  querySnapshot.forEach((doc) => {
    const {
      access,
      background,
      model,
      name,
      difficulty,
      thumbnail,
      desktop_images,
    } = doc.data();
    projects.push({
      access,
      background,
      model,
      name,
      difficulty,
      thumbnail,
      desktop_images,
    });
  });

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
        {projects.map((project) => (
          <Grid size={{ xs: 12, sm: 6 }} key={project.name}>
            <ProjectCard
              access={project.access}
              background={project.background}
              model={project.model}
              name={project.name}
              difficulty={project.difficulty}
              thumbnail={project.desktop_images[0]}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
