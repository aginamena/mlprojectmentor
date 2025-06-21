"use server";

import { db } from "./firebase";
import { collection, doc, DocumentData, getDoc, getDocs } from "firebase/firestore";

export async function getDocumentDataInCollection(collectionName:string, documentName:string) {
  const docRef = doc(db, collectionName, documentName);
  const docSnap = await getDoc(docRef);
  return  docSnap.exists() ? docSnap.data() : null
}

export async function getAllDocumentsDataInCollection(collectionName:string){
  const  result: DocumentData[] = []
  const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
    result.push(doc.data())
});
return result
}