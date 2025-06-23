import {
  // createUserProfileIfNotCreated,
  getDocumentDataInCollection,
} from "@/lib/databaseQuery";
import { Container } from "@mui/material";
import FurtherReading from "./FurtherReading";
import Gallary from "./Gallary";
import Introduction from "./Introduction";
import ProjectDetails from "./ProjectDetails";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const { projectName } = await params;

  // await createUserProfileIfNotCreated(`/projects/${projectName}`);

  let desktop_images: string[] = [];
  let mobile_images: string[] = [];
  let name = "";
  let requirements = "";
  let background = "";
  let starter_files = "";
  let optional_tasks = "";
  let required_reading_link = "";
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
    required_reading_link = data.required_reading_link;
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
        />
      </Container>
      <FurtherReading
        required_reading_link={required_reading_link}
        model={model}
      />
    </>
  );
}
