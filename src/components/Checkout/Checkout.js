import { Link, useNavigate } from "react-router-dom";

const Checkout = ({getTrackingCode}) => {
    const input = document.querySelector("input")
    const navigate = useNavigate()
    const paymentDone = async ()=>{
        //getTrackingCode()
        navigate('/Payment')
    }
    return ( 
        <div className="flex flex-col justify-center items-center">
            <h1 className="">Checkout</h1>
            <form onSubmit ={paymentDone} className="py-[20px] max-w-[700px] self-stretch px-[80px] flex flex-col justify-center items-center gap-[20px] ">
                <h2 className="text-[#333] font-normal text-[24px] leading-[32px] ">Payment Details</h2>

                <>
                    <div className="flex py-[8px] px-[0px] self-stretch items-center border rounded-[12px] ">
                            <label htmlFor="name" className="text-[#333] font-normal text-[18px] leading-[20px]">Name</label>
                            <input required id="name" type="text" className="w-full h-[50px] p-[10px] border-none focus:outline-none " />
                    </div>
                    <div className="flex py-[8px] px-[0px] self-stretch items-center ">
                        <label htmlFor="address" className="text-[#333] font-normal text-[18px] leading-[20px]">Address</label>
                        <input required id="address" type="text"  className="w-full h-[50px] p-[10px] border-none focus:outline-none "/>
                    </div>
                    <div className="flex py-[8px] px-[0px] self-stretch items-center border rounded-[12px]">
                        <label htmlFor="city" className="text-[#333] font-normal text-[18px] leading-[20px]">City</label>
                        <input required id="city" type="text" className="w-full h-[50px] p-[10px] border-none focus:outline-none "/>
                    </div>
                    <div className="flex py-[8px] px-[0px] self-stretch items-center border rounded-[12px]">
                        <label htmlFor="country" className="text-[#333] font-normal text-[18px] leading-[20px]">Country</label>
                        <input required id="country" type="text" className="w-full h-[50px] p-[10px] border-none focus:outline-none" />
                    </div>
                    <div className="flex py-[8px] px-[0px] self-stretch items-center border rounded-[12px]">
                        <label htmlFor="zipCode" className="text-[#cfcaca] font-normal text-[18px] leading-[20px]">ZipCode</label>
                        <input required id="zipCode" type="text" className="w-full h-[50px] p-[10px] border-none focus:outline-none" />
                    </div>          
                </>    
                <>
                    <div className="flex flex-col w-full">
                        <h2 className="">Payment information:</h2>
                        <div className="">
                            <div className="flex py-[8px] px-[0px] self-stretch items-center border rounded-[12px]">
                                <label htmlFor="credit" className="text-[#333] font-normal text-[18px] leading-[20px]">Credit Card Number</label>
                                <input required type="tel" name="" id="credit" />
                            </div>
                            <div className="flex py-[8px] px-[0px] self-stretch items-center border rounded-[12px] justify-between">
                                <div className="w-1/2">
                                    <label htmlFor="" className="text-[#333] font-normal text-[18px] leading-[20px]">Date</label>
                                    <input required type="date" className="w-full h-[50px] p-[10px] border-none focus:outline-none" />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="" className="">CVV</label>
                                    <input required type="password" maxLength={3}   className="w-full h-[50px] p-[10px] border-none focus:outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                <div className="flex w-full flex-col items-start gap-[36px]">
                        <button type="submit" className="flex bg-[#FF6F61] h-[90px] py-[16px] px-[8px] rounded-[8px] justify-center items-center gap-[4px] self-stretch border-[#FF6F61] ">
                        <p className="text-[#F8F8F8] text-[16px] font-normal leading-[24px] ">Place Order</p>
                        </button>
                        
                </div>
            </form>
            <div className="flex max-w-[700px] flex-col items-start gap-[36px]">
                <Link to="/TrackingPage" className="flex bg-[#F8F8F8] h-[90px] py-[16px] px-[8px] rounded-[8px] justify-center items-center gap-[4px] self-stretch border-[#FF6F61] ">
                        <p className="text-[#FF6F61] text-[16px] font-normal leading-[24px] ">Review Order</p>
                </Link>
            </div>
            
        </div>
     );
}
 
export default Checkout;