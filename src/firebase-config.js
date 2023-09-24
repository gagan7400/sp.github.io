import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAALH9ZpF7HdcGHGyXVkuxo5FnDt6YGbVA",
  authDomain: "first-project-ffc33.firebaseapp.com",
  databaseURL: "https://first-project-ffc33-default-rtdb.firebaseio.com",
  projectId: "first-project-ffc33",
  storageBucket: "first-project-ffc33.appspot.com",
  messagingSenderId: "337771639675",
  appId: "1:337771639675:web:966d2e58c63a6a1c6803de"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
