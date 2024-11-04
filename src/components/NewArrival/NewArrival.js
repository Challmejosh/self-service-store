const NewArrival = ()=>{
    
    return( 
        <div className="flex py-[0px] items-center gap-[5px] px-[80px] bg-[#FFD8D4] w-full">
            <div className="">
                <p className="text-[#FF6F61] uppercase text-[32px] sm:text-[64px] font-normal  ">new arrivals</p>
            </div>
            <div className="grid grid-cols-3 w-full">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
            </div>
        </div>
     )
}

export default NewArrival;