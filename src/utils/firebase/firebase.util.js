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
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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

  export const addCollectionAndDocuments = async(collectionKey,objectsToAdd)=>{
    const collectionRef = collection(db,collectionKey);
    const batch = writeBatch(db)
    objectsToAdd.forEach((object)=>{
      const docRef = doc(collectionRef,object.title.toLowerCase())
      batch.set(docRef,object)
    })
    await batch.commit();
    console.log('done')
  }

  export const getCatagoriesAndDocuments = async()=>{
    const collectionRef = collection(db,'catagories')
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const catagoryMap = querySnapshot.docs.reduce((acc,docSnapshot)=>{
      const {title,items} = docSnapshot.data() 
      acc[title.toLowerCase()] = items;
      return acc;
    },{})
    return catagoryMap;
  }

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