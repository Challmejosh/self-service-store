import './App.css';
import { Routes, Route, useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react'
import DetailPage from './Pages/DetailPage';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import useFetch from './components/useFetch/useFetch';
import Footer from './components/Footer/Footer';
import CartPage from './Pages/CartPage';
import SearchPage from './Pages/SearchPage'
import CheckoutPage from './Pages/CheckoutPage'
import TrackPage from './Pages/TrackPage'
import StorePayment from './Pages/StorePayment';
import OnlineSuccess from './Pages/OnlineSuccess';
import HomePage from './Pages/HomePage';
import FirstPage from './Pages/FirstPage';
import CartHistoryPage from './Pages/CartHistoryPage';
import Profile from './Pages/Profile';
import AbandonmentPage from './Pages/AbandonmentPage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, logout, login, db } from './config/firebase';
import { setDoc,doc,arrayUnion } from 'firebase/firestore';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function App() {
  // Pagination 
  
  const [pageNo,setPageNo] = useState(1)
  const handleNumberClick = (num) => {
    setPageNo(num)
  }
  const {product, pending} = useFetch(`https://products-orcin.vercel.app/product?page=${pageNo}&limit=15`);
  const [selected, setSelected] = useState(null);
  const handleViewClick = (viewObject) => {
    setSelected(viewObject);
    console.log(viewObject);
  }
  const numbers = Array.from({length: product.totalPages}, (_,i) => i + 1)
  
  // Cart
  const products = product.data;
  const getCart = () =>{
    const localData = localStorage.getItem("Carts");
    return localData ? JSON.parse(localData) : []
  }
  const [cart,setCart] = useState(getCart);
  const handleCart = (prod)=>{
    const findCart = products.find(item => item.id === prod.id);
            if (findCart){
                const existingProduct = cart.find(item => item.id === prod.id)
                if (existingProduct){
                    setCart(cart.map(item => item.id === prod.id ? {...item, quantity: item.quantity + 1}: item))
                }else{
                    setCart([...cart, {...findCart,  quantity: 1}])
                }
            }
            const Alert = async() => { await alert('Added to cart') }
            Alert()
            
  }
  const handleRemCart = (prod)=>{
    const findCart = products.find(item => item.id === prod.id);
            if (findCart){
                const existingProduct = cart.find(item => item.id === prod.id)
                if (existingProduct){
                    setCart(cart.map(item => item.id === prod.id ? {...item, quantity: item.quantity - 1}: item))
                }else{
                    setCart([...cart, {...findCart,  quantity: 1}])
                }
            }
            
  }
  const handleAddCart = (prod)=>{
    const findCart = products.find(item => item.id === prod.id);
            if (findCart){
                const existingProduct = cart.find(item => item.id === prod.id)
                if (existingProduct){
                    setCart(cart.map(item => item.id === prod.id ? {...item, quantity: item.quantity + 1}: item))
                }else{
                    setCart([...cart, {...findCart,  quantity: 1}])
                }
            }
            
  }
  const cartDel = (prod)=> {
    const del = cart.filter(item => item.id !==  prod.id)
    setCart(del);
  }
  const total = cart.reduce((acct, item) => acct + item.price * item.quantity, 0);
  const cartQuantity = cart.reduce((acct,item)=> acct + item.quantity,0)

  useEffect(()=>{
    localStorage.setItem("Carts",JSON.stringify(cart))
  },[cart])

//search product
 
  const [query,setQuery] = useState('')
  const [result,setResult] = useState([])

  const search= (e) =>{
      setQuery(e.target.value);
      const finds = product.data;
      const findItem = finds.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
      setResult(findItem || 'Your search was not found');
      console.log(findItem)
  }


//tracking Code generate and display
  const[trackingCode,setTrackingCode] =useState('')

  const user = auth.currentUser;
  const generateOrderNumber = (userId)=> {
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random()*1000)
      return setTrackingCode(`ORD-${userId}-${timestamp}-${randomNumber}`);
  }
   const trackNumber = ()=>{
    generateOrderNumber(user.uid)

   }
  

   //Payment Section online and offline https://1rjjxp1q-3000.uks1.devtunnels.ms/
   const [onlinePayment, setOnlinePayment] = useState(false);
   
   const handleCheckboxChange = () => {
    setOnlinePayment(!onlinePayment);
   }
   
  
  
  
      // login & logout 
      const navigate = useNavigate()
      const [loginCon, setLoginCon] = useState(false);
      const changeLogin = () => {
        setLoginCon(!loginCon)
    }
      useEffect(()=>{
        onAuthStateChanged(auth, async (user)=>{
          if(user){
            navigate("/Home")
           changeLogin()
          }else{
            navigate("/")
          }
        })
      },[])

    
      const getAbandon = async () => {
        // Check if the cart is empty
        if (cart.length === 0) {
            return; // Exit the function if the cart is empty
        }
    
        const documentRef = doc(db, "cart Abandon", auth.currentUser.uid);
        try {
            // Prepare the new cart data
            const newCartData = {
                cart: cart.map(item => ({
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    price: item.price,
                    quantity: item.quantity,
                })),
                timestamp: new Date().toLocaleString(), // Optional: Add timestamp for each entry
            };
    
            // Update the document by appending new cart data to an array field
            await setDoc(documentRef, {
                cartHistory: arrayUnion(newCartData) // Use arrayUnion to append to the array
            }, { merge: true }); // Use merge to ensure other data isn't overwritten
            setCart([]);
        } catch (error) {
            console.error("Error saving cart history:", error);
        }
    };
    useEffect(() => {
        let timer;

        const startTimer = () => {
            timer = setTimeout(() => {
                getAbandon();
            }, 1 * 60 * 1000); // 30 minutes
        };

        startTimer();

        // Reset the timer on any cart changes
        return () => {
            clearTimeout(timer);
        };
    }, [cart]); // Dependency array includes cart to reset timer on changes

   return( 
    <div className="App">
      <ToastContainer />
     <Navbar setQuery={setQuery} setLoginCon={setLoginCon} cartQuantity={cartQuantity} loginCon={loginCon} search={search} query={query} result={result} />
          <button onClick={()=>logout()}>log out</button>
        <Routes>
            <Route path='/' exact element={<FirstPage loginCon={loginCon} />} />

            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<HomePage handleNumberClick={handleNumberClick} numbers={numbers} product={product.data} pending={pending} handleViewClick={handleViewClick} handleCart = {handleCart} />} />

            <Route path="/SearchPage"  element={<SearchPage handleCart={handleCart} handleViewClick = {handleViewClick} product = { result } pending= {pending}  />} />
             
              <Route path="/CartPage" element={<CartPage cartDel={cartDel} pending={pending} setCart={setCart}  generateOrderNumber={generateOrderNumber} trackNumber={trackNumber} onlinePayment={onlinePayment} handleCheckboxChange={handleCheckboxChange} getTrackingCode={trackNumber} cart={cart} total={total} handleRemCart={handleRemCart} handleCart={handleCart} trackingCode={trackingCode} handleAddCart={handleAddCart} />} />
              <Route path="/DetailPage" element={<DetailPage selected={selected} pending={pending} handleCart={handleCart} />} />

              <Route path="/TrackingPage" element={<TrackPage  getTrackingCode={trackNumber}  />} />
              
              <Route path='/Payment' element={<StorePayment  />} />

              <Route path="/CheckoutPage" element={ <CheckoutPage getTrackingCode={trackNumber}  />} />

              

              <Route path='/CartHistoryPage' element={<CartHistoryPage pending={pending} />} />
              <Route path='/AbandonmentPage' element={<AbandonmentPage setCart={setCart} />} />
               <Route path="/Profile" element={<Profile />} />
          
          
        </Routes>
        <Footer />
   </div>
  );
}

export default App;
