
  import admin from '@/lib/firebaseAdmin';  
  import { NextRequest, NextResponse } from 'next/server';

  export async function POST(req: NextRequest) {
    try {
        const {collectionName, documentId} = await req.json();
        const docRef =  admin.firestore().collection(collectionName).doc(documentId)
        const docSnap = await docRef.get();
        const data = docSnap.exists ? docSnap.data() : null;
      return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "An Error occured"  }, { status: 500 });
    }
  }
  