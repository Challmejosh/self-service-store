import { doc, getDoc } from "firebase/firestore"
import { useState,useEffect } from "react"
import { auth, db } from "../../config/firebase"

const CartHistory = ({purchaseHIstory}) => {
    const [order,setOrder] = useState([])
    const user = auth.currentUser;
    const [load,setLoad] =useState(false)
        const getDocs = async () => {
            
            try{
                const Doc = doc(db, "cart History", user.uid)
                const mainDoc = await getDoc(Doc)
                const data = mainDoc.data().cartHistory;
                
                setLoad(!load)
                return setOrder(data);
            }catch{
                alert("Reload connection timeout")
            }
        }
        useEffect(()=>{
            getDocs()
        },[])
    return ( 
       <div className="">
          {load ? (
            <div className="">
            {order.map(item => (
              <div key={item.code} className="bg-white p-2 rounded-md border border-gray w-full mt-[20px] shadow-md
              ">
                  {item.cart.map(prod => (
                      <div className="flex self-stretch" key={prod.id}>
                           <img src={prod.image} alt="" className="w-[60px] h-[50px] " />
                           <div>
                              <p className="">{prod.name}</p> 
                              <p className="">{prod.price}{prod.quantity}</p>
                          </div>
                          
                      </div>
                  ))}
                  <div className="">
                      <p className="">Status: {item.deliveryStatus}</p>
                      <p className="">Tracking Code: {item.code}</p>
                      {console.log(item.timestamp)}
                  </div>
              </div>
              

          ))}
      </div>
          ):(
            <div className=" h-screen flex items-center justify-center">
                <div className="loader"></div>
            </div>
          )}
       </div>
     );
}
 
export default CartHistory;