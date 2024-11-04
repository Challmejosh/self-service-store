import { Link } from 'react-router-dom';
import Cart from '../components/Cart/Cart'
const CartPage = ({cart,total,handleRemCart,handleCart,handleCheckboxChange,onlinePayment,trackNumber,orderTrack,generateOrderNumber,getTrackingCode,handlePurchase,setPurchaseHistory,setCart,purchaseEntry,purchaseHistory,pending,trackingCode,cartDel,handleAddCart}) => {

    return ( 
        <div className="relative">
           
            <Cart cartDel={cartDel} trackingCode={trackingCode} pending={pending} purchaseHistory={purchaseHistory} purchaseEntry={purchaseEntry} setCart={setCart} setPurchaseHistory={setPurchaseHistory} handlePurchase={handlePurchase} getTrackingCode={getTrackingCode} generateOrderNumber={generateOrderNumber} orderTrack={orderTrack} trackNumber={trackNumber} onlinePayment={onlinePayment} handleCheckboxChange={handleCheckboxChange} cart={cart} handleCart={handleCart} handleRemCart={handleRemCart} handleAddCart={handleAddCart} total={total}/>
         
           <Link className='absolute top-2 right-3 text-[#333] ' to="/CartHistoryPage">Cart History</Link>
        </div>
     );
}
 
export default CartPage;