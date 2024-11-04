import {useEffect, useState} from 'react'
import { collection,deleteDoc,getDocs,doc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import OrderSearch from '../OrderSearch/OrderSearch'
import AllAbandon from '../../Pages/AllAbandon'
const OrderTracking = () => {
 
    
     const [users,setUsers] = useState([]);
    
    useEffect(()=>{
        const allDoc = () => {
            try{
                const Docs = collection(db,"users")
            getDocs(Docs)
            .then((snapShot) => {
                let books = []
            snapShot.docs.forEach((doc)=> {
                
                   books.push({...doc.data(), id: doc.id})
               })
               setUsers(books)
            })
            }catch(err)  {console.log(err)}
        }
        allDoc()
    },[])
    const handleDelUser = async (item) =>{
        const delRef = doc(db, "users", item.id)
        await deleteDoc(delRef)
        setUsers(users.filter(itm => itm.id !== item.id))
    }
    const [searchDoc, setSearchDoc] = useState(false)
    const [abandon,setAbandon] = useState(false)
    return (
        <div className="flex flex-col items-center w-full justify-center m-5 relative self-stretch">
            {abandon ? (
                <div className="w-full">
                    <AllAbandon />
                </div>
            ): (
                <div className="">
                {searchDoc ? (
                    <OrderSearch  />
                ): (
                    <div className="flex flex-col flex-wrap w-full gap-[10px] self-stretch ">
                    <div className="flex w-full self-stretch justify-evenly items-start border-b border-b-slate-100 mb-3 hover:bg-slate-200  ">
                        <h1 className="font-semibold max-w-[200px]">ID</h1>
                        <h1 className="font-semibold">Username</h1>
                        <h1 className="font-semibold">Email</h1>
                        <h1 className="font-semibold">Actions</h1>
                    </div>
                {users.map(item => (
                    <div className="flex w-full gap-[10px] self-stretch justify-evenly items-center text-right mt-5 border-b-slate-100 border-b   ">
                        <div className="cursor-pointer flex-wrap p-3 max-w-[250px]  ">
                            <h2 className="flex w-full items-start justify-start">{item.id}</h2>
                        </div>
                        <div className="cursor-pointer p-3">
                            <h2 className=" flex items-start justify-start  p-4 static left-10 ">{item.username}</h2>
                        </div>
                        <div className="cursor-pointer p-3">
                            <h2 className=" flex items-start justify-start ">{item.email}</h2>
                        </div>
                        <div className="cursor-pointer p-3 flex gap-[10px] items-start justify-start ">
                            <h2 onClick={()=> handleDelUser(item)} className=" ">Remove</h2>
                        </div>
                    </div>
                ))}
                    </div>
                )}
                </div>
            )}
           
                
            <h3 onClick={()=> setSearchDoc(!searchDoc)} className="flex absolute top-0 right-1 cursor-pointer border border-[#FF6F61] rounded-[200px] p-2 "> search Cart </h3>
            <h3 onClick={()=> setAbandon(!abandon)} className="flex absolute top-0 left-1 cursor-pointer border border-[#FF6F61] rounded-[200px] p-2 "> abandon Cart </h3>
        </div>
     );
}
export default OrderTracking