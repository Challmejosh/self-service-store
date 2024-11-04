import Category from "../components/Category/Category";
import HeroSection from "../components/HeroSection/HeroSection";
import NewArrival from "../components/NewArrival/NewArrival";
import Shop from "../components/Shop/Shop";

const GroceryPage = ({product,handleCart, handleViewClick , pending}) => {
    return(
        <div className="">
            <HeroSection />
            <NewArrival />
            <Category />
            <Shop product={product} handleCart={handleCart} handleViewClick = {handleViewClick} pending={pending} />
        </div>
     ) 
}
export default GroceryPage;