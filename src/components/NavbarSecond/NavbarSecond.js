import { Link } from "react-router-dom";

const NavbarSecond = ({search,query,result,setQuery,loginCon,setLoginCon,cartQuantity}) => {

   const nav = document.querySelector("nav");
    const ham =() => {
        if(nav.classList.contains("hidden")){
            nav.classList.remove("hidden")
        }else{
            nav.classList.add("hidden")
        }
   }

    return ( 
        <div className="flex pt-[16px] pr-[80px] w-full justify-between aligns-center border-bottom-[1px] relative ">

        <Link to="/" className="">
            <h1 className="italic font-bold text-[40px]  ">Shoppy</h1>
        </Link>

        {loginCon ? (
            <>
                <form onSubmit={(event)=> event.preventDefault()} className='flex justify-evenly items-center rounded-[8px] border border-[#000] gap-[4px] ' >
            <input type="search" className="w-full self-stretch focus:outline-none " placeholder="search your product" value={query} onChange={search} name="" id="" />
            <Link to="/SearchPage">
            <input type="submit" value="search" name="" id="search" />
            </Link>
        </form>
        <div onClick={ham} className="hamburger md:hidden grid gap-[5px] cursor-pointer ">
                <span className="w-[50px] h-[10px] bg-[black] rounded-[8px]  "></span>
                <span className="w-[50px] h-[10px] bg-[black] rounded-[8px]  "></span>
                <span className="w-[50px] h-[10px] bg-[black] rounded-[8px]  "></span>
        </div>
        <nav className="md:flex p-[8px] gap-[16px] aligns-center hidden absolute bg-[#FFF] top-[50px] right-0 sm:static justify-content  " >
            <Link className="nav hover:bg-[#FFD8D4] hover:text-[#FFF] " to="/Home">Home</Link>
            <Link className="nav hover:bg-[#FFD8D4] hover:text-[#FFF] " to="/TrackingPage">Track Order</Link>
        <Link className="nav hover:bg-[#FFD8D4] hover:text-[#FFF] " to="/AboutPage">About</Link>
            <Link className="nav hover:bg-[#FFD8D4] hover:text-[#FFF] " to="/ContactPage">Contact</Link>
        </nav>
        
        <Link to="/CartPage" className="relative"> 
        <svg className="svg" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="mdi:cart">
<path id="Vector" d="M28.8334 29.9999C26.9834 29.9999 25.5001 31.4833 25.5001 33.3333C25.5001 34.2173 25.8513 35.0652 26.4764 35.6903C27.1015 36.3154 27.9494 36.6666 28.8334 36.6666C29.7175 36.6666 30.5653 36.3154 31.1904 35.6903C31.8156 35.0652 32.1667 34.2173 32.1667 33.3333C32.1667 32.4492 31.8156 31.6014 31.1904 30.9762C30.5653 30.3511 29.7175 29.9999 28.8334 29.9999ZM2.16675 3.33325V6.66659H5.50008L11.5001 19.3166L9.23341 23.3999C8.98341 23.8666 8.83341 24.4166 8.83341 24.9999C8.83341 25.884 9.1846 26.7318 9.80973 27.3569C10.4348 27.9821 11.2827 28.3333 12.1667 28.3333H32.1667V24.9999H12.8667C12.7562 24.9999 12.6503 24.956 12.5721 24.8779C12.494 24.7997 12.4501 24.6938 12.4501 24.5833C12.4501 24.4999 12.4667 24.4333 12.5001 24.3833L14.0001 21.6666H26.4167C27.6667 21.6666 28.7667 20.9666 29.3334 19.9499L35.3001 9.16658C35.4167 8.89992 35.5001 8.61659 35.5001 8.33325C35.5001 7.89122 35.3245 7.4673 35.0119 7.15474C34.6994 6.84218 34.2754 6.66659 33.8334 6.66659H9.18341L7.61675 3.33325M12.1667 29.9999C10.3167 29.9999 8.83341 31.4833 8.83341 33.3333C8.83341 34.2173 9.1846 35.0652 9.80973 35.6903C10.4348 36.3154 11.2827 36.6666 12.1667 36.6666C13.0508 36.6666 13.8986 36.3154 14.5238 35.6903C15.1489 35.0652 15.5001 34.2173 15.5001 33.3333C15.5001 32.4492 15.1489 31.6014 14.5238 30.9762C13.8986 30.3511 13.0508 29.9999 12.1667 29.9999Z" fill="#848383"/>
</g>
</svg>
            <p className="bg-[red] w-5 h-5 text-sm  rounded-full absolute top-0 right-0 items-center justify-center text-center text-[#FFF]  ">{cartQuantity}</p>
        </Link>
        
            </>
        ): (
            <Link to="/Login">Sign up / Sign in </Link>
        )}
    </div>
     );
}
 
export default  NavbarSecond;