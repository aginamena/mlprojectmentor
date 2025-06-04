"use server";

import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getStarterFiles() {
  const docRef = doc(
    db,
    "downloadable starter files",
    "customer feedback analysis"
  );
  const docSnap = await getDoc(docRef);
  return docSnap.data()
}
