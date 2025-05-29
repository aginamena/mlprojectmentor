import Header from "@/components/Header";
import JoinFbCommunity from "@/components/JoinFbCommunity";
import { Box, Container } from "@mui/material";
import FurtherReading from "./FurtherReading";
import Gallary from "./Gallary";
import Introduction from "./Introduction";
import ProjectDetails from "./ProjectDetails";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default async function Projects() {
  let images: string[] = [];
  let name = "";
  let requirements = "";
  const docRef = doc(db, "projects", "customer feedback analysis");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    images = data.images;
    name = data.name;
    requirements = data.requirements;
  }
  // console.log(docSnap.data());
  return (
    <>
      <Box sx={{ py: 8, px: 4 }}>
        <Header />
      </Box>
      <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Introduction name={name} />
        <Gallary images={images} />
        <ProjectDetails requirements={requirements} />
      </Container>
      <FurtherReading />
      <JoinFbCommunity header="Have a Question?" />
    </>
  );
}
