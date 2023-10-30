import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGEMumWGeaUznmBvfcvv_qRVpHpx9PQOE",
  authDomain: "marketplace-9c4c5.firebaseapp.com",
  projectId: "marketplace-9c4c5",
  storageBucket: "marketplace-9c4c5.appspot.com",
  messagingSenderId: "674191162681",
  appId: "1:674191162681:web:67b656498d860775077ce8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//  initiating the google auth provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
// connecting to Google's auth functionalities
export const auth = getAuth();

//  sign in with Google function
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

// connecting to projects firebase
const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth) return

  // reference to a document in the 'users' collection
  const userDocRef = doc(db, "users", userAuth.uid);

// get the document at that refernce point
  const userSnapshot =  await getDoc(userDocRef)

  // if documents does not exist, target the refernce document and add a new object to it
  if(!userSnapshot.exists()){
    const {displayName,email} = userAuth
    const createdAt = new Date()

    try{
      await setDoc(userDocRef,{
        displayName,email,createdAt, ...additionalInformation
      })
    } catch (err){
      console.log('an error occured');
    }
  }
  // else if the refernce exist, return that  refernce doc
  return userDocRef
};


export const createAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return 

  return await createUserWithEmailAndPassword(auth,email,password)
}
export const signInAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return 

  return await signInWithEmailAndPassword(auth,email,password)
}