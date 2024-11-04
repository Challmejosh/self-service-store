import {Link} from "react-router-dom"
const NavbarFirst = () => {
    return ( 
        <div className="flex w-full pt-[4px] pb-[8px] justify-between aligns-center bg-[#FFD8D4]">
        <div className="flex gap-3 ml-2 mt-2 aligns-center justify-center ">
        <svg className="svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ic:baseline-language">
<path id="Vector" d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.657 6.76146 15.1936 5.5659 14.59 4.44C16.4141 5.068 17.9512 6.33172 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.58397 18.9354 6.04583 17.6708 5.08 16ZM8.03 8H5.08C6.04583 6.32918 7.58397 5.06457 9.41 4.44C8.80643 5.5659 8.34298 6.76146 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.9512 17.6683 16.4141 18.932 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" fill="#FF6F61"/>
</g>
</svg>


<svg className="svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="jam:instagram">
<g id="Group">
<path id="Vector" d="M16.017 2H7.947C6.37015 2.00185 4.85844 2.62914 3.74353 3.74424C2.62862 4.85933 2.00159 6.37115 2 7.948L2 16.018C2.00185 17.5948 2.62914 19.1066 3.74424 20.2215C4.85933 21.3364 6.37115 21.9634 7.948 21.965H16.018C17.5948 21.9631 19.1066 21.3359 20.2215 20.2208C21.3364 19.1057 21.9634 17.5938 21.965 16.017V7.947C21.9631 6.37015 21.3359 4.85844 20.2208 3.74353C19.1057 2.62862 17.5938 2.00159 16.017 2ZM19.957 16.017C19.957 16.5344 19.8551 17.0468 19.6571 17.5248C19.4591 18.0028 19.1689 18.4371 18.803 18.803C18.4371 19.1689 18.0028 19.4591 17.5248 19.6571C17.0468 19.8551 16.5344 19.957 16.017 19.957H7.947C6.90222 19.9567 5.90032 19.5415 5.16165 18.8026C4.42297 18.0638 4.008 17.0618 4.008 16.017V7.947C4.00827 6.90222 4.42349 5.90032 5.16235 5.16165C5.90122 4.42297 6.90322 4.008 7.948 4.008H16.018C17.0628 4.00827 18.0647 4.42349 18.8034 5.16235C19.542 5.90122 19.957 6.90322 19.957 7.948V16.017Z" fill="#FF6F61"/>
<path id="Vector_2" d="M11.9818 6.81909C10.6133 6.82121 9.30136 7.36588 8.33372 8.3337C7.36609 9.30152 6.82168 10.6135 6.81982 11.9821C6.82141 13.351 7.36585 14.6634 8.33372 15.6315C9.3016 16.5996 10.6139 17.1442 11.9828 17.1461C13.3519 17.1445 14.6645 16.5999 15.6326 15.6318C16.6007 14.6637 17.1452 13.3512 17.1468 11.9821C17.1447 10.6132 16.5998 9.30098 15.6315 8.33329C14.6633 7.3656 13.3507 6.82141 11.9818 6.82009V6.81909ZM11.9818 15.1381C11.1451 15.1381 10.3426 14.8057 9.7509 14.214C9.15922 13.6223 8.82682 12.8198 8.82682 11.9831C8.82682 11.1463 9.15922 10.3438 9.7509 9.75217C10.3426 9.16049 11.1451 8.82809 11.9818 8.82809C12.8186 8.82809 13.6211 9.16049 14.2127 9.75217C14.8044 10.3438 15.1368 11.1463 15.1368 11.9831C15.1368 12.8198 14.8044 13.6223 14.2127 14.214C13.6211 14.8057 12.8186 15.1381 11.9818 15.1381Z" fill="#FF6F61"/>
<path id="Vector_3" d="M17.1559 8.09509C17.8391 8.09509 18.3929 7.54127 18.3929 6.85809C18.3929 6.17492 17.8391 5.62109 17.1559 5.62109C16.4728 5.62109 15.9189 6.17492 15.9189 6.85809C15.9189 7.54127 16.4728 8.09509 17.1559 8.09509Z" fill="#FF6F61"/>
</g>
</g>
</svg>


<svg className="svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="material-symbols:call">
<path id="Vector" d="M19.95 21C17.8667 21 15.8083 20.546 13.775 19.638C11.7417 18.73 9.89167 17.4423 8.225 15.775C6.55833 14.1077 5.271 12.2577 4.363 10.225C3.455 8.19233 3.00067 6.134 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07933 8.725 3.238C8.90833 3.39667 9.01667 3.584 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.704 12.1123 8.162 12.687C8.62 13.2617 9.12433 13.816 9.675 14.35C10.1917 14.8667 10.7333 15.346 11.3 15.788C11.8667 16.23 12.4667 16.634 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3877 16.038 14.313C16.28 14.2383 16.5173 14.2173 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1377 20.775 15.313C20.925 15.4883 21 15.684 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z" fill="#FF6F61"/>
</g>
</svg>


           
        </div>
        <Link to="/Profile" className="bg-[#FF6F61] mt-2 mr-2 w-[40px] h-[40px] flex-shrink-0 border-1-[#FF6F6F61] rounded-full ">
            
        </Link>
    </div>
     );
}
 
export default NavbarFirst;