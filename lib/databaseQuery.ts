"use server";

import { redirect } from "next/navigation";
import { auth0 } from "./auth0";
import { db } from "./firebase";
import { collection, doc, DocumentData, getDoc, getDocs, setDoc } from "firebase/firestore";

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
export async  function createUserProfileIfNotCreated(currentPath:string){
     const session = await auth0.getSession();
      if (!session) {
        redirect(`/auth/login?returnTo=${currentPath}`);
      }
      const { user } = session;
      const profileCreated = await getDocumentDataInCollection(
        "users",
        user.email as string
      );
      if (!profileCreated) {
        await createDocumentDataInCollection("users", user.email as string, user);
      }
}