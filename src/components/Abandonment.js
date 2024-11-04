import  { useEffect,useState } from 'react';
import { deleteDoc, doc, setDoc, collection, getDocs,getDoc,deleteField ,updateDoc,arrayRemove} from 'firebase/firestore';
import { db, auth } from '../config/firebase';

const Abandonment = ({ setCart }) => {
    const [mainDoc,setMainDoc] = useState([])
    const getCartAbandonment = async () =>{
        try{
        const docRef = doc(db, "cart Abandon", auth.currentUser.uid)
        const fetch = await getDoc(docRef)
        /*.then((snapShot) => {
            const eachDoc =  snapShot.data() //snapShot.docs.map(item => ({...item.data(), id: item.id }))
            const allDoc = eachDoc.flat();
            setMainDoc(allDoc)
            console.log(allDoc)
            console.log(mainDoc)
        })*/
       if(fetch.exists()){
        const data = fetch.data()
        console.log(data)
        setMainDoc(data.cartHistory)
        console.log(mainDoc)
       }else{
        alert("No item")
       }
       
        }catch{
            alert("Connection lost")
        }
    }
    useEffect(()=>{
    getCartAbandonment()
    },[])
    const addCart = async (item) => {
        const docRef = doc(db, "cart Abandon", auth.currentUser.uid);
        
        try {
            // Fetch the current abandoned cart document
            const fetch = await getDoc(docRef);
            if (fetch.exists()) {
                const currentData = fetch.data();
                console.log(currentData)
                const updatedCartHistory = currentData.cartHistory.filter(itm => 
                    !itm.some(prod => prod === item) // Remove the item being added
                );
    
                // Update the document with the new cart history
                await updateDoc(docRef, { cartHistory: updatedCartHistory });
    
                // Update the main cart in the parent component
                setCart(item);
                alert("Item added to cart successfully!");
    
                // Update the local state to reflect the change
                setMainDoc(updatedCartHistory);
            }
        } catch (error) {
            console.error("Error updating cart:", error);
            alert("Failed to add item to cart. Please try again.");
        }
    };
    const handleDelUsers = async (item) => {
        try {
            const delRef = doc(db, "cart Abandon", auth.currentUser.uid); // Reference to the document
    
            // Update the document to remove the specific cart item from the cartHistory array
            await updateDoc(delRef, {
                cartHistory: arrayRemove(item) // Remove the specific cartItem from the array
            });
    
            // Update the order state to reflect the removal
            setMainDoc(mainDoc.map(itm => {
                if (itm === item) {
                    return {
                        ...itm,
                        cartHistory: itm.cartHistory.filter(it => it !== item) // Remove the cartItem from the local state
                    };
                }
                setCart(item)
                return itm;
            }));
    
            alert("Order deleted successfully");
        } catch (error) {
            console.error("Error deleting item: ", error);
            alert("Failed to delete item");
        }
    };
    return (
        <div className="">
            {/* Your component UI goes here */}
            {mainDoc.map(itm => (
                <div className="flex flex-col w-full gap-[10px] self-stretch justify-evenly items-center text-right mt-5 border-b-slate-100 border-b m-[3] ">
                    {itm.cart.map(prod => (
                        <div className="flex justify-between self-stretch mb-5 gap-[5]  " key={prod.id}>
                            <>
                                <img src={prod.image} alt="" className="w-[60px] h-[50px] " />
                                    <div>
                                        <p className="">{prod.name}</p> 
                                        <p className="">{prod.price}-{prod.quantity}</p>
                                    </div>
                                    
                            </>
                            
                        </div>
                    ))}
                   {/* <button onClick={()=>handleDelUsers(itm)} >Add to cart</button>*/}
                </div>
            ))}
        </div>
    );
}

export default Abandonment;