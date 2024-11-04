
import {doc,getFirestore, setDoc} from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { toast } from 'react-toastify';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "play-62bbc.firebaseapp.com",
  projectId: "play-62bbc",
  storageBucket: "play-62bbc.appspot.com",
  messagingSenderId: "1044737926681",
  appId: "1:1044737926681:web:6fad52bf0868d27b442c88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  const auth = getAuth(app);

 const signup = async (username,email,password) => {
   try {
    const res = await createUserWithEmailAndPassword(auth, email,password);
    const user = res.user;
    await setDoc(doc(db,"users",user.uid),{
        email,
        password,
        avatar: "",
        id: user.uid,
        username: username.toLowerCase(),
        name: "",
        bio: "I love shopping",
        lastSeen: Date.now(),
    })
    await setDoc(doc(db,"products",user.uid),{
        orderProduct: []
    })
   } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[0].split('-').join())
   }
 }
 const login = async (email,password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[0].split('-').join())

    }
 }
 const logout = async ()=>{
  try {
    await signOut(auth);
} catch (error) {
    console.error(error + "try again");
    toast.error(error.code.split('/')[0].split('-').join())
    
}
 }
 

export {signup,login,db,auth,logout}