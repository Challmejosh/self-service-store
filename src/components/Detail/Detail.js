import {Link} from 'react-router-dom'
const Detail = ({selected,pending,handleCart}) => {

    return ( 
        <div className=" grid w-full h-[1332px] lg:h-[1944px] justify-center items-center ">
            {pending?(
                <div className="">
                    <img src={selected.image} alt="" className="w-[343px] h-[379px]  lg:w-[700px] lg:h-[982px] flex-shrink-0 rounded-[8px]  " />

<div className="flex w-[375px] py-[0px] px-[16px] lg:w-[744px] flex-col items-start gap-[40px] " >

<h3 className="self-stretch flex flex-wrap text-[24px] lg:text-[32px] font-normal leading-[40px] ">{selected.name}</h3>

<div className="flex p-[8px] flex-col items-col gap-[20px] self-stretch " >
    <div className="flex items-start gap-[4px] ">
        <div className="flex w-[200px] items-start ">
            <div className="flex w-[100px] p-[8px] justify-center items-center gap-[4px] flex-shrink-0 ">

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
        </div>
        <div className="flex p-[8px] items-center gap-[12px] ">
            <p className="text-[#848383] text-[24px] font-normal leading-[32px] ">1,200</p>
            <p className="text-[#848383] text-[24px] font-normal leading-[32px] ">Reviews</p>
        </div>
    </div>
</div>
<h1 className="w-[91px] text-[32px] font-normal leading-[40px] ">${selected.price}</h1>

</div>
<div className="flex flex-col items-center gap-[8px] self-stretch " >
    <div className="flex items-center gap-[8px] self-stretch ">
        <h3 className="text-[#333] text-[24px] font-normal leading-[32px] ">Colors Available</h3>
        <div className="flex w-[248px] items-center p-[12px] gap-[18px] ">
            <div className="flex-shrink-0 rounded-[8px] w-[40px] h-[40px] bg-[#8F9498] "></div>
            <div className="flex-shrink-0 rounded-[8px] w-[40px] h-[40px] bg-[#1F38B9] "></div>
            <div className="flex-shrink-0 rounded-[8px] w-[40px] h-[40px] bg-[#1B1C21] "></div>
            <div className="flex-shrink-0 rounded-[8px] w-[40px] h-[40px] bg-[#851652] "></div>
        </div>
    </div>
    
</div>

<div onClick={handleCart} className="flex w-[147px] h-[40px] py-[16px] px-[8px] justify-center items-center gap-[4px] flex-shrink-0 bg-[#FF6F61] rounded-[8px] cursor-pointer " >
    <p className="text-[#F8F8F8] text-[16px] font-normal  leading-[24px] ">Add to Cart</p>
</div>
                </div>
            ):(
                <div className="flex h-screen w-full items-center justify-center">
                     <div className=" h-screen">
                        <div className="loader"></div>
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default Detail;