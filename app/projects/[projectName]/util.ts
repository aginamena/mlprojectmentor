"use server";

import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getStarterFiles(folderName:string) {
  const docRef = doc(
    db,
    "downloadable_starter_files",
    folderName
  );
  const docSnap = await getDoc(docRef);
  return docSnap.data()
}
