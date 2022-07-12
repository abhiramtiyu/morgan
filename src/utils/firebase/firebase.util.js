import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged
  } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc  
} from 'firebase/firestore'    
const firebaseConfig = {
    apiKey: "AIzaSyAq9v2vwidZ0V_EAPshuE5JdgW6_4e8JLw",
    authDomain: "morgan-f1a85.firebaseapp.com",
    projectId: "morgan-f1a85",
    storageBucket: "morgan-f1a85.appspot.com",
    messagingSenderId: "824911649705",
    appId: "1:824911649705:web:56cdeef5dfd7802671c2b8"
  };
  
  // Initialize Firebased
  const firebaseApp = initializeApp(firebaseConfig);
  const googleProvider = new GoogleAuthProvider()

  googleProvider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInwithGooglePopup = ()=> signInWithPopup(auth,googleProvider)
  export const signInWithGoggleRedirect = ()=> signInWithRedirect(auth,googleProvider)
  
  const db = getFirestore();
  export const createUserDocumentFromAuth =async (userAuth,
    additionalInfo={}) =>{
      if(!userAuth) return;
      const userDocRef = doc(db, "users", userAuth.uid)
      const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;

  } 

  export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!password || !email) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  }
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };
  export const signOutUser = async()=>await signOut(auth);

  export const onAuthStateChangedListner = (callback)=> onAuthStateChanged(auth,callback);