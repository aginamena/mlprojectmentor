"use client";

import { getDocumentDataInCollection } from "@/lib/databaseQuery";
import { Button } from "@mui/material";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ZipFiles() {
  const params = useParams();
  const [state, setState] = useState("Download starter files");
  const projectName = params.projectName as string;

  async function generateZipFolder() {
    setState("Downloading starter files...");
    const zip = new JSZip();

    const starterFiles = await getDocumentDataInCollection(
      "downloadable_starter_files",
      projectName
    );
    const images = [];
    for (const starterFile in starterFiles) {
      const value = starterFiles[starterFile];
      if (Array.isArray(value)) images.push(...value);
      else if (starterFile == "thumbnail") images.push(value);
      else zip.file(`${starterFile}`, value);
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
    saveAs(content, `${projectName}.zip`);
    setState("Downloaded starter files");
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
