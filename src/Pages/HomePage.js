import Category from "../components/Category/Category";
import HeroSection from "../components/HeroSection/HeroSection";
import NewArrival from "../components/NewArrival/NewArrival";
import Shop from "../components/Shop/Shop";


const HomePage = ({product, pending,handleViewClick,handleCart,handleNumberClick,numbers}) => {
    const numb = document.querySelector(".numb")
    const handleNumb =  (num)=>{
        handleNumberClick(num)
    }
    return ( 
        <div className="w-full ">
            <HeroSection />
            <NewArrival />
            <Category />
            <Shop product={product} handleCart={handleCart} handleViewClick = {handleViewClick} pending={pending} />
           <div className="flex w-full flex-wrap ">
                {numbers.map(num => (
                        <li className=" border border-[#FF6F61] w-fit h-fit p-1 rounded-sm hover:bg-[#FF6F61] cursor-pointer  " onClick={()=> handleNumb(num)} key={num}>{num}</li>
                    ))}
           </div>
        </div>
     );
}
 
export default HomePage;
