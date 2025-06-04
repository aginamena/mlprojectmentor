import Header from "@/components/Header";
import JoinFbCommunity from "@/components/JoinFbCommunity";
import { db } from "@/lib/firebase";
import { Box, Container } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import FurtherReading from "./FurtherReading";
import Gallary from "./Gallary";
import Introduction from "./Introduction";
import ProjectDetails from "./ProjectDetails";

export default async function Projects() {
  let images: string[] = [];
  let name = "";
  let requirements = "";
  let background = "";
  let starter_files = "";
  let optional_tasks = "";
  let required_reading_link = "";
  let difficulty = "";
  let model = "";

  const docRef = doc(db, "projects", "customer feedback analysis");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    images = data.images;
    name = data.name;
    requirements = data.requirements;
    background = data.background;
    starter_files = data.starter_files;
    optional_tasks = data.optional_tasks;
    difficulty = data.difficulty;
    model = data.model;
    required_reading_link = data.required_reading_link;
  }

  return (
    <>
      <Box sx={{ py: 8, px: 4 }}>
        <Header />
      </Box>
      <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Introduction
          name={name}
          model={model}
          difficulty={difficulty}
          images={images}
        />
        <Gallary images={images} />
        <ProjectDetails
          requirements={requirements}
          background={background}
          starter_files={starter_files}
          optional_tasks={optional_tasks}
          images={images}
        />
      </Container>
      <FurtherReading
        required_reading_link={required_reading_link}
        model={model}
      />
      <JoinFbCommunity header="Have a Question?" />
    </>
  );
}
