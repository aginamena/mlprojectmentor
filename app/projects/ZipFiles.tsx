"use client";

import { faker } from "@faker-js/faker";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Button } from "@mui/material";
import { hotelReviews } from "./reviews";
import { readme } from "./README";

export default function ZipFiles() {
  async function generateFile() {
    const zip = new JSZip();

    //adding image files
    const sub = zip.folder("images");
    const homepage = await fetch("/homepage.png");
    const homepageBlob = await homepage.blob();
    const review = await fetch("/homepage.png");
    const reviewBlob = await review.blob();
    if (sub) {
      sub.file("homepage.png", homepageBlob);
      sub.file("review.png", reviewBlob);
    }

    const fakedReviews = hotelReviews.map((review) => ({
      name: faker.internet.username(),
      date: faker.date.past(),
      email: faker.internet.email(),
      content: review,
      profile: faker.image.avatar(),
    }));

    zip.file("reviews.json", JSON.stringify(fakedReviews));
    zip.file("README.md", readme);

    // Generate zip and download
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "ml_project_mentor.zip");
  }
  return (
    <Button
      onClick={generateFile}
      variant="contained"
      sx={{
        mt: 3,
        color: "white",
        backgroundColor: "#0018FF",
        textTransform: "none",
        fontSize: "1rem",
        fontWeight: "bold",
        mb: { xs: "50px", md: "0" },
        borderRadius: "999px",
        px: 3,
        py: 1.5,

        "&:hover": { backgroundColor: "#0012cc" },
      }}
    >
      Download starter files
    </Button>
  );
}
