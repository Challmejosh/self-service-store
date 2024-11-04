import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="flex py-[0px] px-[80px] flex-col items-start mt-3 gap-[69px] flex-shrink-0 border-t border-[rgba(132,131,131,0.50)]  ">
            <div className="grid sm:flex items-center sm:gap-[271px] self-stretch ">
                <div className="flex w-full flex-col justify-center items-start gap-[32px] ">
                    <h1 className="self-stretch text-[96px] font-bold leading-[150px] ">Like What You See?</h1>
                    <div className="flex w-[147px] h-[40px] py-[16px] px-[8px] justify-center items-center gap-[4px] rounded-[8px] bg-[#FF6F61] ">
                        <Link to="" className="text-[16px] font-normal leading-[24px] text-[#F8F8F8] " >Shop Now</Link>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-[32px] ">
                    <div className="flex p-[8px] items-center gap-[8px] self-stretch ">
                        <h1 className="text-[32px] font-normal leading-[40px] text-[#FF6F61] ">Shoppy</h1>
                    </div>
                    
                    <div className="flex p-[8px] flex-col justify-center items-center gap-[16px] ">
                        <Link className="nav" to="/">Home</Link>
                        <Link className="nav" to="/ShopPage">Shop</Link>
                        <Link className="nav" to="/AboutPage">About</Link>
                        <Link className="nav" to="/ContactPage">Contact</Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-col gap-[12px] w-full">
                <div className="flex gap-[12px] items-center ">
                    <svg className="w-[32px] h-[32px]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M15.8398 12.1867C17.5465 12.2667 17.9865 13.72 18.0132 14.4H20.3998C20.2932 11.76 18.4132 10.1467 15.7998 10.1467C12.8532 10.1467 10.6665 12 10.6665 16.1867C10.6665 18.7733 11.9065 21.84 15.7865 21.84C18.7465 21.84 20.3332 19.64 20.3732 17.9067H17.9865C17.9465 18.6933 17.3865 19.7467 15.8132 19.8267C14.0665 19.7733 13.3332 18.4133 13.3332 16.1867C13.3332 12.3333 15.0398 12.2133 15.8398 12.1867ZM15.9998 2.66667C8.63984 2.66667 2.6665 8.64 2.6665 16C2.6665 23.36 8.63984 29.3333 15.9998 29.3333C23.3598 29.3333 29.3332 23.36 29.3332 16C29.3332 8.64 23.3598 2.66667 15.9998 2.66667ZM15.9998 26.6667C10.1198 26.6667 5.33317 21.88 5.33317 16C5.33317 10.12 10.1198 5.33333 15.9998 5.33333C21.8798 5.33333 26.6665 10.12 26.6665 16C26.6665 21.88 21.8798 26.6667 15.9998 26.6667Z" fill="#848383"/>
    </svg>
                    <p className="text-[#848383] text-[18px] font-normal leading-[26px] ">2024</p>
                </div>
                <p className="w-full flex flex-wrap text-[#848383] text-[24px] font-normal leading-normal ">Shoppy-All Rights Reserved</p>
            </div>
        </footer>
     );
}
 
export default Footer;