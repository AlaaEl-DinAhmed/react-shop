import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAiDvR_6XHatp8Q7lCWdwHg24SlOVXscFQ",
  authDomain: "react-shop-87f5c.firebaseapp.com",
  projectId: "react-shop-87f5c",
  storageBucket: "react-shop-87f5c.appspot.com",
  messagingSenderId: "641854860456",
  appId: "1:641854860456:web:e939f380be5289d03ae69d",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup: any = () => signInWithPopup(auth, provider);
