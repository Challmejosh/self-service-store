import {useState,useEffect} from 'react'
import { collection, doc, getDocs,updateDoc,arrayRemove,arrayUnion } from 'firebase/firestore'
import {  db } from '../../config/firebase'
import {Link,useNavigate} from 'react-router-dom'

const OrderSearch = () => {

    const [query,setQuery] = useState(``)
    const [order,setOrder] = useState([])
    const [preOrder,setPreOrder] = useState([])
    const [hidden,setHidden] =useState(false)
    const Docs = collection(db,"cart History")
    const getDocuments = async () => {
        const snapShot = await getDocs(Docs)
        const raw = snapShot.docs.map(item => ({...item.data(),id: item.id}))
        setPreOrder(raw.flat())
        setOrder(raw.flat())
    }   
    useEffect(()=>{
        getDocuments();
        setHidden(true)
    },[query])
    
    const handleDelUsers = async (item, cartItem) => {
        try {
            const delRef = doc(db, "cart History", item.id); // Reference to the document
    
            // Update the document to remove the specific cart item from the cartHistory array
            await updateDoc(delRef, {
                cartHistory: arrayRemove(cartItem) // Remove the specific cartItem from the array
            });
    
            // Update the order state to reflect the removal
            setOrder(order.map(itm => {
                if (itm.id === item.id) {
                    return {
                        ...itm,
                        cartHistory: itm.cartHistory.filter(it => it.code !== cartItem.code) // Remove the cartItem from the local state
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
    const handleDelCart = async (item, cartItem, cartEntry) => {
        try {
            const docRef = doc(db, "cart History", item.id); // Reference to the document
    
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
            setOrder(order.map(itm => {
                if (itm.id === item.id) {
                    return {
                        ...itm,
                        cartHistory: itm.cartHistory.map(entry => {
                            if (entry.code === cartEntry.code) {
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
    const navigate = useNavigate()
    const handleCheckout = async ()=>{
        const orders = await order.map(item => item)
        const flat =  orders.flat();
        const cartHistory =  flat.map(item => item.cartHistory)
        const cartFlat = cartHistory.flat()
        const item = cartFlat.filter(itm => itm.code === query)
        if(item.length > 0){
            navigate("/CheckoutPage")
        }else {
            alert("Order no found")
        }
    }
   
        return (
        <div className="w-full flex flex-col self-stretch items-center justify-center ">
            <div className="w-[250px] border rounded-md p-2 flex self-stretch items-center justify-center ">
                    <input type="text" name="trackSearch" id="query" value={query} onChange={(e)=>setQuery(e.target.value)} className="w-full focus:outline-none " placeholder="enter your tracking code" />
                    <button onClick={getDocuments}>search</button>
            </div>
                <div className="flex flex-col self-stretch w-full">  
                    {order.map((item,index)=>{
                        const flatItem =  item.cartHistory.flat()
                        const filterItem = flatItem.filter(itm =>itm.code===query)
                        return (
                            <div className="flex" key={index}>
                                {filterItem.map(itm => (
                                    <div key={itm.code} className="bg-white flex flex-col justify-between p-2 rounded-md border border-gray w-full shadow-md
                                    ">
                                        <>
                                       <div className="flex flex-col self-stretch ">
                                            {itm.cart.map(prod => (
                                                    <div className="flex justify-between self-stretch mb-5 gap-[5]  " key={prod.id}>
                                                        <>
                                                            <img src={prod.image} alt="" className="w-[60px] h-[50px] " />
                                                            <div>
                                                            <p className="">{prod.name}</p> 
                                                            <p className="">{prod.price}-{prod.quantity}</p>
                                                            </div>
                                                        </>
                                                        <p className="cursor-pointer" onClick={()=>handleDelCart(item,prod,itm)}>delete</p>
                                                    </div>
                                                ))}
                                                
                                        </div>

                                        </>
                                        <div className="flex flex-col self-stretch  ">
                                                    <div className="flex flex-col">
                                                        <p className="">Status: {itm.deliveryStatus}</p>
                                                        <p className="">Tracking Code: {itm.code}</p>
                                                    </div>
                                                    <p className="cursor-pointer" onClick={()=>handleDelUsers(item,itm)}>remove order</p>
                                                    
                                                </div>  
                                    </div>
                                ))}
                            </div>
                        )
            })}
                        {query.length > 0 && order.length > 0 ? (
                            <div className="flex item-center justify-center mt-[80px] p-3">
                                <button onClick={handleCheckout} className="flex justify-center items-center text-center cursor-pointer bg-[#FF6F61] p-2 text-[#FFF] rounded-md "  >checkout</button>
                            </div>
                        ):null}
                        
                </div>  
                        
        </div>
     );
}
 
export default OrderSearch;