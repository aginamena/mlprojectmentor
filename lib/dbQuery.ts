import { DocumentData } from "firebase-admin/firestore";
import admin from "./firebaseAdmin";

const firestore = admin.firestore()

export async function getDocumentDataInCollection(collectionName: string, documentName: string) {
 const docRef = firestore.collection(collectionName).doc(documentName)
  const docSnap = await docRef.get();
  return docSnap.exists ? docSnap.data() : null;
}

export async function getAllDocumentsDataInCollection(collectionName: string) {
  const result: DocumentData[] = [];
  const querySnapshot = await firestore.collection(collectionName).get();
  querySnapshot.forEach((doc) => result.push(doc.data()));
  return result;
}

export async function updateDocumentDataInCollection(collectionName: string, documentName: string, data: object) {
  const docRef = firestore.collection(collectionName).doc(documentName);
  const docSnap = await docRef.get();
  if (!docSnap.exists) {
    await docRef.set(data);
  } else {
    await docRef.update(data);
  }
}
