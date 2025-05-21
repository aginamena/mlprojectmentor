import Header from "@/components/Header";
import JoinFbCommunity from "@/components/JoinFbCommunity";
import { Box, Container } from "@mui/material";
import FurtherReading from "./FurtherReading";
import Gallary from "./Gallary";
import Introduction from "./Introduction";
import ProjectDetails from "./ProjectDetails";

export default function Projects() {
  return (
    <>
      <Box sx={{ py: 8, px: 4 }}>
        <Header />
      </Box>
      <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Introduction />
        <Gallary />
        <ProjectDetails />
      </Container>
      <FurtherReading />
      <JoinFbCommunity header="Have a Question?" />
    </>
  );
}
