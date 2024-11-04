import { createContext, useState } from "react";
import {doc, getDoc} from 'firebase/firestore'
import { db } from "../config/firebase";


export const AppContext = createContext();

const AppContextProvider = (props) => {

        const [userData,setUserData] = useState(null);
        const [cartData,setCartData] = useState(null);
        
        const loadUserData = async (uid) => {
            try{
                const userRef = doc(db, "users", uid);
                const userSnap = await getDoc(userRef)
                const userData = userSnap.data();
                setUserData(userData); 
                /*if(userData.email && userData.password){
                    navigate("/Home");
                }else{
                    navigate("/")
                }*/
            }catch(error){
                console.log(error)
            }
        }
       
        const value = {
            userData,setUserData,
            cartData,setCartData,
            loadUserData
        }
    return ( 
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
     );
}
 
export default AppContextProvider;