import {useState,useEffect} from 'react'
import { collection, doc, getDocs,updateDoc,arrayRemove,arrayUnion } from 'firebase/firestore'
import {  db } from '../config/firebase'
const AllAbandon = () => {
    const [mainArr,setMainArr] =useState([])
        const allDocument = async () => {
            const docRef = collection(db,"cart Abandon")
            const allDoc = await getDocs(docRef)
            const eachDoc = allDoc.docs.map(itm => ({...itm.data(), id: itm.id}))
            const addDocs = eachDoc.flat()
            setMainArr(addDocs)
            console.log(addDocs + mainArr)
        }
        useEffect(() => {
            allDocument()
        },[])
        const handleDelCart = async (item, cartItem, cartEntry) => {
            try {
                const docRef = doc(db, "cart Abandon", item.id); // Reference to the document
        
                // Create a new cart array without the item to be deleted
                const updatedCart = cartEntry.cart.filter(prod => prod.id !== cartItem.id);
        
                // Update the document to replace the cart entry with the updated cart
                await updateDoc(docRef, {
                    cartHistory: arrayRemove(cartEntry) // Remove the old cart entry
                });
        
                // Add the updated cart entry back to the cartHistory
                await updateDoc(docRef, {
                    cartHistory: arrayUnion({
                        ...cartEntry,
                        cart: updatedCart // Update the cart array
                    })
                });
        
                // Update the order state to reflect the removal
                setMainArr(mainArr.map(itm => {
                    if (itm.id === item.id) {
                        return {
                            ...itm,
                            cartHistory: itm.cartHistory.map(entry => {
                                if (entry.id === cartEntry.id) {
                                    return {
                                        ...entry,
                                        cart: updatedCart // Update local state cart
                                    };
                                }
                                return entry;
                            })
                        };
                    }
                    return itm;
                }));
        
                alert("Item deleted successfully");
            } catch (error) {
                console.error("Error deleting cart item: ", error);
                alert("Failed to delete cart item");
            }
        };
        const handleDelUsers = async (item, cartItem) => {
            try {
                const delRef = doc(db, "cart Abandon", item.id); // Reference to the document
        
                // Update the document to remove the specific cart item from the cartHistory array
                await updateDoc(delRef, {
                    cartHistory: arrayRemove(cartItem) // Remove the specific cartItem from the array
                });
        
                // Update the order state to reflect the removal
                setMainArr(mainArr.map(itm => {
                    if (itm.id === item.id) {
                        return {
                            ...itm,
                            cartHistory: itm.cartHistory.filter(it => it.id !== cartItem.id) // Remove the cartItem from the local state
                        };
                    }
                    return itm;
                }));
        
                alert("Order deleted successfully");
            } catch (error) {
                console.error("Error deleting item: ", error);
                alert("Failed to delete item");
            }
        };
    return ( 
        <div className="w-full flex flex-col self-stretch items-center justify-center ">  

            <div className="flex flex-col self-stretch w-full">  
                {mainArr.map((item,index)=>{
                    const flatItem =  item.cartHistory.flat()
                    return (
                        <div className="flex flex-col self-stretch w-full" key={index}>

                            {flatItem.map(itms => (
                                <div key={itms.code} className="bg-white flex justify-between p-2 rounded-md border border-gray w-full shadow-md
                                ">
                                    <>
                                   <div className="flex flex-col self-stretch ">
                                        {itms.cart.map(prod => (
                                                <div className="flex justify-between self-stretch mb-5 gap-[5]  " key={prod.id}>
                                                    <>
                                                        <img src={prod.image} alt="" className="w-[60px] h-[50px] " />
                                                        <div>
                                                        <p className="">{prod.name}</p> 
                                                        <p className="">{prod.price}-{prod.quantity}</p>
                                                        </div>
                                                    </>
                                                    <p className="cursor-pointer" onClick={()=>handleDelCart(item,prod,itms)} >delete</p>
                                                </div>
                                            ))}
                                            <div className="flex flex-col self-stretch  ">
                                                <p className="cursor-pointer" onClick={()=>handleDelUsers(item,itms)} >remove order</p>
                                        </div> 
                                    </div>
                                    </>
                                     
                                </div>
                            ))}
                        </div>
                    )
        })}         
            </div>  
                    
    </div>
     );
}
export default AllAbandon;