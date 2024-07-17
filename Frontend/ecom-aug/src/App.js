import CombineRouting from "./Routing/CombineRouting";
import { useState } from "react";
import axios from "axios";
import {Base_URL}from "./Config/BaseURL";
import{useEffect}from "react";
function App() {


  
  const [cartCount, setCartCount] = useState(0)

  function getCartCount(){
    let u_id = localStorage.getItem('auth-id')
    axios.get(Base_URL+ '/get-cart-count' , {params : {u_id : u_id}}).then((res)=>{
   
    console.log("hi",res.data, res.data.count)
    setCartCount(res.data.count)
    localStorage.setItem('count' ,res.data.count)
    }).catch((err)=>{
      console.log("got error during cart count");
      setCartCount(0)
    })
   }


   useEffect(()=>{
      getCartCount()
   },[cartCount])









  return (
  <CombineRouting countOfCart = {cartCount}/>
  )
}

export default App;
