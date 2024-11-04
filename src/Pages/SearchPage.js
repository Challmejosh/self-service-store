import Shop from "../components/Shop/Shop";
const SearchPage = ({product,handleCart,handleViewClick,pending})=>{

    return ( 
        <div className="">
         
         
            <Shop product={product} handleCart={handleCart} handleViewClick = {handleViewClick} pending={pending} />   
            
        </div>
     )
}
export default SearchPage;