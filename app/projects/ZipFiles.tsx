"use client";

import { useUser } from "@auth0/nextjs-auth0";
import LockIcon from "@mui/icons-material/Lock";
import { Button } from "@mui/material";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { useRouter } from "next/navigation";
import { getStarterFiles } from "./util";
import { useState } from "react";

export default function ZipFiles({ images }: { images: string[] }) {
  const { user } = useUser();
  const router = useRouter();
  const [state, setState] = useState("Download starter files");

  async function generateZipFolder() {
    setState("Downloading starter files...");
    const zip = new JSZip();
    const starterFiles = await getStarterFiles();
    for (const starterFile in starterFiles) {
      zip.file(`${starterFile}`, starterFiles[starterFile]);
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
    const splittedLink = images[0].split("/");
    const folderName = splittedLink[splittedLink.length - 2]
      .toLowerCase()
      .replaceAll("%20", "_");
    saveAs(content, `${folderName}.zip`);
    setState("Downloaded starter files");
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
      {state}
    </Button>
  );
}
