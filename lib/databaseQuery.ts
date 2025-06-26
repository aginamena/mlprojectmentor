"use server";

import { collection, doc, DocumentData, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

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

export async function createDocumentDataInCollection(collectionName:string, documentName:string,data:object){
    await setDoc(doc(db, collectionName, documentName), data);
}
export async function updateDocumentDateInCollection(collectionName:string, documentName:string,data:object){
   const profileCreated = await getDocumentDataInCollection(
       collectionName,
        documentName,
      );
      if (!profileCreated) {
        await createDocumentDataInCollection(collectionName, documentName, data);
      }else{
        await updateDoc(doc(db, collectionName, documentName), data)
      }
}