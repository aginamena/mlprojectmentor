

import admin from '@/lib/firebaseAdmin';

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const {data, collectionName, documentId} = await req.json();

  const docRef = admin.firestore().collection(collectionName).doc(documentId);
  const docSnap = await docRef.get();
  if (!docSnap.exists) {
    await docRef.set(data);
  } else {
    await docRef.update(data);
  }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An Error occured"  }, { status: 500 });
  }
}
