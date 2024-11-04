import { doc, getDoc,collection } from "firebase/firestore"
import {useEffect} from "react"
import { auth, db } from "../config/firebase"
const Profile = ()=> {
    useEffect(()=>{
        const getDocument = async ()=>{
            const docRef = doc(db, "users", auth.currentUser.uid)
            const snapShot = await getDoc(docRef)
            if(snapShot.exists()){
            const data = snapShot.data()

            }
        }
            
        getDocument()
    },[])
    return ( 
        <div className="h-screen">
            <button>log out</button>
            <div className="loader"></div>
        </div>
     );
}
export default Profile;