import { Link } from 'react-router-dom';
import Cart from '../components/Cart/Cart'
const CartPage = ({cart,total,handleRemCart,handleCart,handleCheckboxChange,onlinePayment,trackNumber,orderTrack,generateOrderNumber,getTrackingCode,handlePurchase,setPurchaseHistory,setCart,purchaseEntry,purchaseHistory,pending,trackingCode,cartDel,handleAddCart}) => {

    return ( 
        <div className="">
           <div className="flex flex-col relative mt-[7rem] sm:mt-0 ">
            
           <Cart cartDel={cartDel} trackingCode={trackingCode} pending={pending} purchaseHistory={purchaseHistory} purchaseEntry={purchaseEntry} setCart={setCart} setPurchaseHistory={setPurchaseHistory} handlePurchase={handlePurchase} getTrackingCode={getTrackingCode} generateOrderNumber={generateOrderNumber} orderTrack={orderTrack} trackNumber={trackNumber} onlinePayment={onlinePayment} handleCheckboxChange={handleCheckboxChange} cart={cart} handleCart={handleCart} handleRemCart={handleRemCart} handleAddCart={handleAddCart} total={total}/>
         
         <div className=" flex flex-col absolute top-2 left-2">
          <Link className=' m-1 text-[#333] ' to="/CartHistoryPage">Cart History</Link>
          <Link to="/AbandonmentPage" className="flex m-1 text-[#333] " >unattended cart</Link>
          </div>
           </div>

        </div>
     );
}
 
export default CartPage;