import {useState,useNavigate} from 'react'
import { signup,login } from '../../config/firebase';



const Login = (userAuthLog) => {

   const [username,setUsername] = useState('');
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const [currstate,setCurrstate] = useState("Sign up");
   const changePage = ()=>{
      if(currstate === "Sign up"){
         setCurrstate("Login");
      }else{
         setCurrstate("Sign up");
      }
   }
   const onSubmitHandler = (event)=>{
      event.preventDefault();
      if(currstate === "Sign up"){
         signup(username,email,password)
         console.log(signup(username,email,password))
      }else{
         login(email,password)
      }
   }
    return ( 
        <div className="bg-[#FFF] w-[300px] p-3 rounded-[30px] h-[500px] mt-[35px] flex items-center justify-center">
              
           <form onSubmit={onSubmitHandler} className="flex items-center justify-center flex-col w-full p-3 h-full rounded-[30px]">
           <h2>{currstate}</h2>
              {currstate==="Login" ? (
               <>
                  
            
              <div className="flex flex-col">
                  
                  <input required className='log' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" type="email" />
                  <input required className='log' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" type="password"  />
                  <div className=" flex gap-1 justify-center aligns-center">
                     <input required type="checkbox" name="check" id="check" />
                     <label htmlFor="check">Agree to the terms and conditions</label>
                  </div>
                  <input  type="submit" value="Login now" className="log cursor-pointer" /> 
              </div>
              <div>
                  <p>I do not have an account <span  onClick={changePage} className="text-[blue] underline cursor-pointer">Click here</span></p>
              </div>
               </>
              ):
              (
               <>
              
        
          <div className="flex flex-col">
              <input required className='log' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="username" type="text" name="username" />
              <input required className='log' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" type="email" />
              <input required className='log' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" type="password"  />
              <div className=" flex gap-1 justify-center aligns-center">
                 <input required type="checkbox" name="" id="check" />
                 <label htmlFor="check">Agree to the terms and conditions</label>
              </div>
              <input  type="submit" value="Sign up" className="log cursor-pointer" /> 
          </div>
          <div>
              <p>I do have an account <span onClick={changePage}  className="text-[blue] underline cursor-pointer">Click here</span></p>
          </div>
           </>
              )}
           </form>
        </div>
     );
}
 
export default Login;
