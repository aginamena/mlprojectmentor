"use client";

import { faker } from "@faker-js/faker";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Button } from "@mui/material";
export default function ZipFiles() {
  const reviews = [
    "I had a wonderful stay at the hotel.",
    "The room was spotless and the staff were friendly.",
    "Great value for money and excellent service.",
    "The location was perfect for exploring the city.",
    "Everything was clean and well maintained.",
    "Staff went above and beyond to help us.",
    "We enjoyed our time here and would come again.",
    "Fantastic experience from check-in to check-out.",
    "The bed was very comfortable and cozy.",
    "Highly recommend this place to anyone visiting.",
    "The stay was okay, nothing too special.",
    "It was average, just what we expected.",
    "Service was fine but not outstanding.",
    "The room looked exactly like the photos.",
    "Facilities were usable but not impressive.",
    "Our stay was neither great nor terrible.",
    "Just a standard hotel experience.",
    "The food was decent but nothing memorable.",
    "Okay for a quick overnight stay.",
    "An acceptable choice for the price.",
    "The room was dirty and smelled bad.",
    "Staff were rude and unhelpful during our stay.",
    "Very noisy environment, couldn’t sleep well.",
    "Poor maintenance and broken amenities.",
    "We were disappointed with the cleanliness.",
    "Definitely not worth the money we paid.",
    "Had issues with the check-in process.",
    "Would not recommend this hotel to others.",
    "The bed was uncomfortable and squeaky.",
    "Air conditioning did not work at all.",
  ];
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

    const fakedReviews = reviews.map((review) => ({
      name: faker.internet.username(),
      date: faker.date.past(),
      email: faker.internet.email(),
      content: review,
      profile: faker.image.avatar(),
    }));
    zip.file("reviews.json", JSON.stringify(fakedReviews));

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
