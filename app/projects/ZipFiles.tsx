"use client";
import { useUser } from "@auth0/nextjs-auth0";
import { faker } from "@faker-js/faker";
import LockIcon from "@mui/icons-material/Lock";
import { Button } from "@mui/material";
import dateFormat from "dateformat";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { useRouter } from "next/navigation";
import { dashboard, reviews } from "./pages";
import { readme } from "./README";
import { hotelReviews } from "./reviews";

export default function ZipFiles() {
  const { user } = useUser();
  const router = useRouter();

  async function generateZipFolder() {
    const zip = new JSZip();

    //adding image files
    const sub = zip.folder("images");
    const dashboardImg = await fetch("/dashboard.png");
    const dashboardImgBlob = await dashboardImg.blob();
    const positiveReviews = await fetch("/positive_reviews.png");
    const positiveReviewsBlob = await positiveReviews.blob();
    const neutralReviews = await fetch("/neutral_reviews.png");
    const neutralReviewsBlob = await neutralReviews.blob();
    const negativeReviews = await fetch("/negative_reviews.png");
    const negativeReviewsBlob = await negativeReviews.blob();
    if (sub) {
      sub.file("dashboard.png", dashboardImgBlob);
      sub.file("positive_reviews.png", positiveReviewsBlob);
      sub.file("neutral_reviews.png", neutralReviewsBlob);
      sub.file("negative_reviews.png", negativeReviewsBlob);
    }

    const fakedReviews = hotelReviews.map((review) => ({
      name: faker.internet.username(),
      date: dateFormat(faker.date.past(), "mediumDate", true),
      email: faker.internet.email(),
      content: review,
      profile: faker.image.avatar(),
    }));

    zip.file("reviews.json", JSON.stringify(fakedReviews));
    zip.file("index.html", dashboard);
    zip.file("reviews.html", reviews);
    zip.file("README.md", readme);
    zip.file("style.css", "");
    zip.file("script.js", "");
    zip.file("reviews.js", "");

    // Generate zip and download
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "customer_feedback_analysis.zip");
  }
  if (!user) {
    return (
      <Button
        onClick={() => router.push("../auth/login?returnTo=/projects")}
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
        <LockIcon style={{ marginLeft: "5px" }} />
      </Button>
    );
  }
  return (
    <Button
      onClick={generateZipFolder}
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
