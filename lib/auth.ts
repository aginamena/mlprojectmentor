
import {auth, googleProvider, signInWithPopup} from "./firebaseClient"

export async  function loginWithGoogle(){
   const {user} = await signInWithPopup(auth, googleProvider)
   const {displayName, photoURL, email, phoneNumber} =user.providerData[0]
    await fetch("/api/save_data",{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({data:{displayName, photoURL, email, phoneNumber}, documentId:email, collectionName:"users"}),
  });

}