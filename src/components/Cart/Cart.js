import { doc, setDoc,arrayUnion } from "firebase/firestore";
import { useState,use } from "react";
import { Link,useNavigate} from "react-router-dom";
import { auth, db } from "../../config/firebase";
import OnlineSuccess from "../../Pages/OnlineSuccess";

const Cart = ({cart,total,handleRemCart,handleCart,handleCheckboxChange,onlinePayment,orderTrack,trackNumber,generateOrderNumber,getTrackingCode,handlePurchase,setPurchaseHistory,setCart,purchaseHistory,purchaseEntry,pending,trackingCode,cartDel,handleAddCart}) => {
        const delivery = total * 15 /100;
        const [pac,setPac] = useState(0);        
        const calPac= (event)=>{
            setPac(event.target.checked?total * 10 /100 : 0)
        }
        
        const finalTotal = delivery + total + pac;
        const navigate = useNavigate()
        const userAuth = auth;
        const getCartHistory = async () => {
            const documentRef = doc(db, "cart History", userAuth.currentUser.uid);
            try {
                // Prepare the new cart data
                const newCartData = {
                    cart: cart.map(item => ({
                        id: item.id,
                        name: item.name,
                        image: item.image,
                        price: item.price,
                        quantity: item.quantity,
                    })),
                    deliveryStatus: "success", // Add any other data you'd like
                    timestamp: new Date().toLocaleString(),// Optional: Add timestamp for each entry
                    code: trackingCode
                };
        
                // Update the document by appending new cart data to an array field
                await setDoc(documentRef, {
                    cartHistory: arrayUnion(newCartData) // Use arrayUnion to append to the array
                }, { merge: true }); // Use merge to ensure other data isn't overwritten
            } catch (error) {
                console.error("Error saving cart history:", error);
            }
        };
        const [clickCount,setClickCount] = useState()
        const [product, setProduct] = useState()
        const [orderDone,setOrderDone] = useState(true)
        const handleCheckout = async () => {
            setClickCount(clickCount + 1)
               if(finalTotal === 0) {
                alert("No item added")
               }
               else if (clickCount < 5 && finalTotal > 20000 ){
                    alert("first purchase should not exceed $20000")
               } else {
                /*if(onlinePayment){
                    navigate('/CheckoutPage')
                  }else{
                    navigate('/StorePayment')
                    
                  }*/
                 setOrderDone(!orderDone)
                  getTrackingCode()
                  alert(getTrackingCode)
                  getCartHistory()
                  await setCart([])
               }

        }
        
    return ( 
        <div className=" bg-[#fff] flex flex-col items-center justify-center  ">
            
        {orderDone ? (
            <>
            
            <h1 className="text-[#333] text-[32px] font-normal leading-[48px] ">Cart Item</h1>

            <div className="flex max-w-[1000px] py-[16px] px-[8px] flex-col items-center gap-[74px] ">

                
    <div className="cardDetail flex flex-col items-center gap-[20px] self-stretch ">
        <div className="card flex flex-col items-start gap-[12px] self-stretch  ">
            {cart.map(item => (
                <div key={item.id} className="grid sm:flex w-[343] sm:w-full h-[320px] sm:py-[12px] sm:px-[0px] py-[0px] px-[16px] justify-center items-center gap-[32px] md:gap-[32px] self-stretch mt-[200px] ">

                    <img src={item.image} alt="" className="lg:w-[343px] lg:h-[288px] rounded-[12px] h-[288px] self-stretch  " />

                    <div className="flex lg:w-[728px] sm:justify-between sm:items-center sm:flex-row flex-col justify-center items-start gap-[32] self-stretch  ">

                        <div className="flex md:w-[297px] flex-col items-start gap-[8px] flex-shrink-0 self-stretch ">

                            <h2 className="text-[20px] font-normal leading-[28px] text-[#333]  ">{item.name}</h2>

                            <div className="flex flex-col items-center self-stretch  ">
                                <div className="flex items-center ap-[8px] self-stretch ">
                                    <h4 className="text-[20px] text-[#848383] font-normal leading-[28px] ">Color</h4>
                                    Color select
                                </div>
                            </div>
                            <div className="flex flex-col p-[8px] items-start gap-[20px] self-stretch ">
                                <h4 className="text-[#333] text-[28px] leading-[36px] lg:text-[32px] font-normal lg:leading-[40px] lg:w-[91px] ">{item.price}</h4>
                            </div>

                        </div>

                       <div className="flex lg:w-[370px] lg:p-[8px] justify-between items-center flex-shrink-0 py-[8px] px-[0px] self-stretch  ">
                            <div className="flex py-[8px] px-[12px] items-center gap-[16px]  ">
                                <div onClick={()=> handleRemCart(item)} className="flex w-[48px] p-[8px] flex-col justify-center items-center gap-[4px] rounded-[8px] bg-[#DBBDE] ">
                                    <p className="text-[#333] font-normal text-[28px] leading-[32px]">-</p>
                                </div>
                                <div className="flex w-[48px] p-[8px] flex-col justify-center items-center gap-[4px] ">
                                    <p className="text-[#333] font-normal text-[24px] leading-[32px] ">{item.quantity}</p>
                                </div>
                                <div onClick={() => handleAddCart(item)} className="flex w-[48px] p-[8px] flex-col justify-center items-center gap-[4px] rounded-[8px] bg-[#DBBDE] ">
                                    <p className="text-[#333] font-normal text-[28px] leading-[32px]">+</p>
                                </div>
                            </div>
                            <div onClick={()=> cartDel(item)} >
                            <svg  className="w-[40px] cursor-pointer h-[40px] " xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M9.99998 31.6667C9.99998 33.5 11.5 35 13.3333 35H26.6666C28.5 35 30 33.5 30 31.6667V11.6667H9.99998V31.6667ZM31.6666 6.66667H25.8333L24.1666 5H15.8333L14.1666 6.66667H8.33331V10H31.6666V6.66667Z" fill="#E74C3C"/>
</svg>
                            </div>
                           
                       </div>
                    </div>
                </div>
            ))}
           
        </div>
        <div className="total mt-[200px] flex flex-col items-start gap-[12px] self-stretch ">
            <div className="flex py-[12px] px-[0px] justify-between items-center self-stretch ">
                <p className="text-[#333] text-[20px] font-normal leading-[28px]">Do you want your goods to be packaged</p>
                <div className="flex items-center cursor-pointer justify-center">
                        <input type="checkbox" onChange={calPac}  className=" cursor-pointer" id='yes' />
                </div>
            </div>
            <div className="flex py-[12px] px-[0px] justify-between items-center self-stretch ">
                <p className="text-[#333] text-[20px] font-normal leading-[28px] ">Sub Total</p>
                <p className="text-[32px] text-[#333] font-normal leading-[40px] ">${total}</p>
            </div>
            <div className="flex py-[12px] px-[0px] justify-between items-center self-stretch ">
                <p className="text-[#333] text-[20px] font-normal leading-[28px] ">Delivery</p>
                <p className="text-[32px] text-[#333] font-normal leading-[40px] ">${delivery}</p>
            </div>
            <div className="flex py-[12px] px-[0px] justify-between items-center self-stretch ">
                <p className="text-[#333] text-[20px] font-normal leading-[28px] ">Packaged</p>
                <p className="text-[32px] text-[#333] font-normal leading-[40px] ">${pac}</p>
            </div>
            <div className="flex py-[12px] px-[0px] justify-between items-center self-stretch ">
                <p className="text-[#333] text-[20px] font-normal leading-[28px] ">Total</p>
                <p className="text-[32px] text-[#333] font-normal leading-[40px] ">${finalTotal}</p>
            </div> 
           
            
        </div>
    </div>


    <div className="flex w-full flex-col items-start gap-[36px]">
            <div onClick={handleCheckout} className="flex bg-[#FF6F61] h-[90px] py-[16px] px-[8px] rounded-[8px] justify-center items-center gap-[4px] self-stretch border-[#FF6F61] ">
            <p className="text-[#F8F8F8] text-[16px] font-normal leading-[24px] ">Check Out</p>
            </div>
            <Link to="/Home" className="flex bg-[#F8F8F8] h-[90px] py-[16px] px-[8px] rounded-[8px] justify-center items-center gap-[4px] self-stretch border-[#FF6F61] ">
            <p className="text-[#FF6F61] text-[16px] font-normal leading-[24px] ">Continue Shopping</p>
            </Link>
    </div>
   
    

</div>
            </>
        ):(
            <div>
                <OnlineSuccess  getTrackingCode={trackNumber} trackingCode = {trackingCode} />
            </div>
        )}

            
            
        

        </div>
     );
}
 
export default Cart;