import Checkout from "../components/Checkout/Checkout";
const CheckoutPage = ({getTrackingCode}) => {
    return ( 
        <div className="flex justify-center items-center">
            <Checkout getTrackingCode={getTrackingCode} />
        </div>
     );
}
 
export default CheckoutPage;