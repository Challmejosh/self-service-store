import { Link } from "react-router-dom";

const ItemList = ({product,handleViewClick,handleCart})=>{
    return ( 
        <div className="grid items-center gap-[40px] self-stretch justify-center md:grid-cols-2 lg:grid-cols-3 ">
        {product.map(item => (
            <div className="flex py-[8px] px-[4px] flex-col justify-center items-center rounded-[12px] border border-[rgba(132,131,131,0.50)] shadow-[4px 4px 8px 0px rgba(0,0,0,0.20)] h-[550px] min-h-[500px] min-w-[300px]  " key={item.id}>
                <img className="flex w-[350px] h-[330px] sm:w-[290px] sm:h-[270px] lg:w-[350px] lg:h-[330px] md:w-[300px] md:h-[280px] py-[17px] px-[0px] gap-[4px] rounded-t-xl rounded-tr-xl rounded-b-none rounded-bl-none items-center justify-center" src={item.image} alt={item.name} />


                <div className="flex p-[8px] flex-col justify-start items-center rounded-t-none rounded-tl-none rounded-b-[12px] rounded-br-[12px]  w-full " >
                    <div className="flex flex-col w-full justify-center items-start gap-[18px] self-stretch bg-[#F8F8F8] ">
                        <div className="flex flex-col w-full items-start gap-[12px] self-stretch ">
                            <h3 className="text-[14px] w-full font-normal leading-[20px] text-[#333] ">{item.name}</h3>
                            <div className="flex items-center gap-[4px]">
                            <svg className="w-[20px] h-[24px] " xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
  <path d="M10.0001 17.77L15.1501 21.5L13.7834 14.47L18.3334 9.74L12.3417 9.13L10.0001 2.5L7.65841 9.13L1.66675 9.74L6.21675 14.47L4.85008 21.5L10.0001 17.77Z" fill="#FFF628"/>
  
  
</svg>
<svg className="w-[20px] h-[24px] " xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
  <path d="M10.0001 17.77L15.1501 21.5L13.7834 14.47L18.3334 9.74L12.3417 9.13L10.0001 2.5L7.65841 9.13L1.66675 9.74L6.21675 14.47L4.85008 21.5L10.0001 17.77Z" fill="#FFF628"/>
  
  
</svg>
<svg className="w-[20px] h-[24px] " xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
  <path d="M10.0001 17.77L15.1501 21.5L13.7834 14.47L18.3334 9.74L12.3417 9.13L10.0001 2.5L7.65841 9.13L1.66675 9.74L6.21675 14.47L4.85008 21.5L10.0001 17.77Z" fill="#FFF628"/>
  
  
</svg>
<svg className="w-[20px] h-[24px] " xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
  <path d="M10.0001 17.77L15.1501 21.5L13.7834 14.47L18.3334 9.74L12.3417 9.13L10.0001 2.5L7.65841 9.13L1.66675 9.74L6.21675 14.47L4.85008 21.5L10.0001 17.77Z" fill="#FFF628"/>
  
  
</svg>
<svg className="w-[20px] h-[24px] " xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
  <path d="M10.0001 17.77L15.1501 21.5L13.7834 14.47L18.3334 9.74L12.3417 9.13L10.0001 2.5L7.65841 9.13L1.66675 9.74L6.21675 14.47L4.85008 21.5L10.0001 17.77Z" fill="#FFF628"/>
  
  
</svg>
                            </div>
                            <h4 className="font-semibold text-[20px] leading-[28px] text-[#333] ">${item.price}</h4>
                        </div>
                    </div>
                    <div className="flex w-full  p-[8px] justify-between items-start bg-[#F8F8F8] gap-[4px] ">
                        <Link onClick={()=> handleViewClick(item)} to='/DetailPage' className="flex  w-1/2  h-[48px]  py-[12px] px-[8px] justify-center gap-[4px] flex-shrink-0 rounded-[8px] border border-[#FF6F61] bg-[#F8F8F8] ">
                        <p className="text-[10px] font-normal leading-[24px] text-[#FF6F61] ">Quick View</p>
                        </Link>
                        <div onClick={()=>handleCart(item)} className="flex w-1/2  h-[48px]  py-[12px] px-[8px] justify-center gap-[4px] flex-shrink-0 rounded-[8px] border border-[#FF6F61] bg-[#FF6F61] cursor-pointer ">
                        <p className="text-[10px] font-normal leading-[24px] text-[#F8F8F8] cursor-pointer ">Add to Cart</p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
     );
}
export default ItemList;