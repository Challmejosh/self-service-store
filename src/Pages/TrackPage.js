import { useState } from "react";
import OrderTracking from "../components/orderTracking/OrderTracking";
import { login } from "../config/firebase";

const TrackPage = ({searchCode,searchResult,handleSearchCode,setSearchCode}) => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loginError,setLoginError] = useState(false)
    const handleCashier = (event,email,password) => {
        event.preventDefault();
       if(email === "cashier@admin.com" && password === "testCashier"){
        
                setLoginError(true)
                // handle login success
                
       
    }else{
        alert('cashier only')
    }
}
    
    return ( 
        <div className="flex h-screen items-center justify-center">
            {loginError ? (
                <OrderTracking searchCode={searchCode} handleSearchCode={handleSearchCode} searchResult={searchResult} setSearchCode={setSearchCode}/>
            ):(
                <form className="flex flex-col rounded-lg p-[20px ] mt-[50px] h-fit shadow-md w-[300px] self-stretch  " onSubmit={(e)=> handleCashier(e,email,password) }>
                    <input required className="w-full focus:outline-none h-[60px] p-[10px]  " type="email" value={email} onChange={(e) => setEmail(e.target.value
                    )} placeholder="Email"/>
                    <input required className="w-full focus:outline-none h-[60px] p-[10px]  " type="password" value={password} onChange={(e) => setPassword(e.target.value
                    )} placeholder="Password"/>
                    <button className="w-full cursor-pointer rounded-md focus:outline-none h-[60px] p-[10px] bg-[#FF6F61] text-[#fff]  " type="submit">Login</button>

                </form>
            )}
        </div>
     );
}
 
export default TrackPage;