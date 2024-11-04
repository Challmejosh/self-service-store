import ItemList from '../ItemList/ItemList'

const Shop = ({product,handleCart,pending,handleViewClick}) => {
    return ( 
        <div className="flex w-full py-[0px] sm:px-[80px] flex-col items-center gap-[20px] ">
            {pending?(
               <div className="">
                 <h1 className="text-[32px] font-normal leading-[40px] self-stretch text-[#333] ">Exclusive Deals Just For You </h1>
                 <ItemList product={product} handleCart={handleCart} handleViewClick = {handleViewClick} />
               </div>
            ):(
            <div className=" h-screen">
                <div className="loader"></div>
            </div>
            )}
        </div>
     );
}
 
export default Shop;