"use client";
import { db } from "@/lib/firebase";
import { useUser } from "@auth0/nextjs-auth0";
import LockIcon from "@mui/icons-material/Lock";
import { Button } from "@mui/material";
import { saveAs } from "file-saver";
import { doc, getDoc } from "firebase/firestore";
import JSZip from "jszip";
import { useRouter } from "next/navigation";

export default function ZipFiles({ images }: { images: string[] }) {
  const { user } = useUser();
  const router = useRouter();

  async function generateZipFolder() {
    const zip = new JSZip();
    const docRef = doc(
      db,
      "downloadable starter files",
      "customer feedback analysis"
    );
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const starterFiles = docSnap.data();
      for (const starterFile in starterFiles) {
        zip.file(`${starterFile}`, starterFiles[starterFile]);
      }
    }

    //adding image files
    const sub = zip.folder("images");
    await Promise.all(
      images.map(async (image) => {
        const splittedLink = image.split("/");
        const fileName = splittedLink[splittedLink.length - 1];
        const img = await fetch(image);
        const blob = await img.blob();
        if (sub) sub.file(`${fileName}`, blob);
      })
    );

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
