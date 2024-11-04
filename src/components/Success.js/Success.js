import {Link} from 'react-router-dom'
const Success = ({trackingCode}) => {
    return ( 
        <div className="bg-[#FFF] shadow-md rounded-md max-w-[500px] w-[500px] flex flex-col items-center justify-center self-stretch p-3 h-screen m-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
  <g clip-path="url(#clip0_1_914)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M107.73 25.5551C109.136 26.9615 109.926 28.8689 109.926 30.8576C109.926 32.8463 109.136 34.7536 107.73 36.1601L51.5149 92.3751C50.772 93.1182 49.89 93.7076 48.9193 94.1097C47.9486 94.5119 46.9081 94.7189 45.8574 94.7189C44.8067 94.7189 43.7662 94.5119 42.7955 94.1097C41.8248 93.7076 40.9428 93.1182 40.1999 92.3751L12.2699 64.4501C11.5536 63.7582 10.9822 62.9306 10.5891 62.0156C10.1961 61.1006 9.98916 60.1164 9.98051 59.1206C9.97185 58.1247 10.1616 57.1372 10.5387 56.2154C10.9158 55.2937 11.4727 54.4563 12.1769 53.7521C12.8811 53.0479 13.7185 52.491 14.6402 52.1139C15.562 51.7368 16.5496 51.5471 17.5454 51.5557C18.5412 51.5644 19.5254 51.7713 20.4404 52.1643C21.3555 52.5574 22.183 53.1288 22.8749 53.8451L45.8549 76.8251L97.1199 25.5551C97.8164 24.8581 98.6434 24.3053 99.5537 23.9281C100.464 23.5508 101.44 23.3567 102.425 23.3567C103.41 23.3567 104.386 23.5508 105.296 23.9281C106.206 24.3053 107.033 24.8581 107.73 25.5551Z" fill="#2ECC71"/>
  </g>
  <defs>
    <clipPath id="clip0_1_914">
      <rect width="120" height="120" fill="white"/>
    </clipPath>
  </defs>
</svg>
       <div className="flex flex-col gap-[20px] items-center justify-center  "> 
        <p className="font-semibold">Order Confirmed</p>
          <p className="">submit track number to cashier for payment and retrieval of goods </p>
          <Link className="font-semibold " to="/TrackingPage">track your Order - {trackingCode} </Link>

          <Link to="/" className="flex bg-[#FF6F61] w-[200px] h-[40px] py-[16px] px-[8px] rounded-[8px] justify-center items-center gap-[4px] self-stretch border-[#FF6F61] ">
              <p className="text-[#634c4a] text-[16px] font-normal leading-[24px] ">Continue Shopping</p>
          </Link>
       </div>
    </div>
     );
}
 
export default Success;