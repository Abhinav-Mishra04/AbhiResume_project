import AuthRouting from "./AuthRouting";
import AllRouting from "./AllRouting";



function CombineRouting({countOfCart}){

   console.log("combibine routing comp", countOfCart);
  
    

    
    return(
        <>
        {!localStorage.getItem('auth-id') ? <AuthRouting /> : <AllRouting countOfCart = {countOfCart}/>}
    </>
    
    )


}

export default CombineRouting