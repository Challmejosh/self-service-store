import { Link } from "react-router-dom"
import Success from "../components/Success.js/Success"

const OnlineSuccess = ({trackingCode})=>{
    return ( 
        <div className="flex items-center justify-center">
            <Success trackingCode = {trackingCode} />
        </div>
        
     )
}
export default OnlineSuccess