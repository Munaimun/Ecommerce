import { initializeApp } from "firebase/app";
// Using these will do signIn opt
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Firestore
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzUlul1pEJjb08kQ_HI7MQ7H3XFB8md_k",
  authDomain: "ecommerce-95eae.firebaseapp.com",
  projectId: "ecommerce-95eae",
  storageBucket: "ecommerce-95eae.appspot.com",
  messagingSenderId: "937332670155",
  appId: "1:937332670155:web:50c4ce4ee5f5dca696254e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const useSnapShot = await getDoc(userDocRef);
  console.log("use snapshot", useSnapShot);

  if (!useSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
};
