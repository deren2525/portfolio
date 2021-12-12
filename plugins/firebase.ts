import { FirebaseOptions, getApps, getApp, initializeApp, FirebaseApp } from 'firebase/app';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

const firebase: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export default firebase;
