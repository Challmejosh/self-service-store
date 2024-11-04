import { Link } from "react-router-dom";

const Category = ()=>{
    
    return( 
        <div className="flex py-[0px] px-[80px] flex-col items-center gap-[20px] justify-center ">
            <div className="flex p-[12px] flex-wrap items-center gap-[12px] w-full ">
                <Link to="/" className="cate">All</Link>
                <Link to="/Grocery" className="cate">Grocery</Link>
                <Link to="/Health" className="cate">Health</Link>
                <Link to="Laundry" className="cate">Laundry</Link>
                <Link to="/MenAndWomen" className="cate">Men & Women</Link>
                <Link to="/Phone" className="cate">Phone</Link>
            </div>
            <div className="flex py-[16px] px-[0px] items-center gap-[8px] self-stretch ">
                <div className="flex text-[16px] justify-center items-center gap-[4px] rounded-[12px] border-[rgba(132,131,131,0.50)] border">
                    <h2 className="text-[20px] font-semibold leading-[28px] ">Filter:</h2>
                </div>
                <div className="flex flex-wrap p-[8px] items-center gap-[16px] ">
                    <Link to="" className="flex items-center text-[18px] font-normal leading-[26px] text-[#FF6F61] ">Category</Link>
                    <Link to="" className="flex items-center text-[18px] font-normal leading-[26px] ">Price Range</Link>
                    <Link to="" className="flex items-center text-[18px] font-normal leading-[26px] ">Brand</Link>
                    <Link to="" className="flex items-center text-[18px] font-normal leading-[26px] ">Rating</Link>
                </div>
            </div>
            <div className="flex py-[16px] px-[0px] items-center gap-[8px] self-stretch ">
                <div className="flex text-[16px] justify-center items-center gap-[4px] rounded-[12px] border border-[rgba(132,131,131,0.50)] ">
                    <h2 className="text-[28px] font-semibold leading-[36px] ">Sort By:</h2>
                </div>
                <div className="flex flex-wrap p-[8px] items-center gap-[16px]  ">
                    <Link to="" className="flex text-[18px] items-center font-normal leading-[26px] text-[#FF6F61]">Popularity</Link>
                    <Link to="" className="flex text-[18px] items-center font-normal leading-[26px]">Price(Low to High)</Link>
                    <Link to="" className="flex text-[18px] items-center font-normal leading-[26px]">Newest</Link>
                    <Link to="" className="flex text-[18px] items-center font-normal leading-[26px]">Oldest</Link>
                </div>
            </div>
        </div>
     )
}

export default Category;