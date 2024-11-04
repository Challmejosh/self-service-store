import NavbarFirst from "../NavbarFirst/NavbarFirst";
import NavbarSecond from "../NavbarSecond/NavbarSecond";

const Navbar = ({search,cartQuantity,query,result,setQuery,loginCon,setLoginCon}) => {
    return ( 
        <div className="w-full flex flex-col self-stretch">
           <NavbarFirst />
           <NavbarSecond search={search} loginCon={loginCon} setLoginCon={setLoginCon} setQuery={setQuery} query={query} result={result} cartQuantity={cartQuantity} />
        </div>
     );
}
 
export default Navbar;