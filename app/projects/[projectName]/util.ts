"use server";

import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getStarterFiles(projectName:string) {
  const docRef = doc(
    db,
    "downloadable_starter_files",
    projectName
  );
  const docSnap = await getDoc(docRef);
  return docSnap.data()
}
