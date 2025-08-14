import firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

if(!firebase.getApps().length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  });
}

export const firebaseApp = firebase;
export const dataBase = getFirestore(firebase.getApp());