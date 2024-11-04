import CartHistory from "../components/CartHistory/CartHistory";

const CartHistoryPage = ({pending,purchaseHistory,items}) => {
    return ( 
        <div className="">
            
                <CartHistory purchaseHistory={purchaseHistory} />
            
        </div>
     );
}
 
export default CartHistoryPage;