import {useLocation} from 'react-router-dom';

function ViewProduct(){

const {state} = useLocation()

console.log(state)
const addToCart = (el)=>{
  console.log(el,"add to cart");
}

return(

    <div class="card" style={{width : "18rem"}}>
    <img class="card-img-top" src={state.data.image == "undefined" ? "" :state.data.image } alt="Card image cap"/>
    <div class="card-body"> 
      <h5 class="card-title">{state.data.p_name}</h5>
      <p class="card-text"><span style={{color:'red' , fontWeight : "bold" ,fontSize : "20px"}}>{`-${state.data.discount}%`}</span><span style={{marginLeft : 20 , fontsize : 20 }}>	&#8377;</span>{(state.data.price -(state.data.discount / 100) * state.data.price)}<span></span></p>
      <p class="card-text"> M.R.P. <span>&#8377;</span> <del> {state.data.price} </del></p>
  
      {/* <a onClick={()=>{handleViewMore(el)}} href="#" class="btn btn-primary" style={{marginRight : 10}}>Vew More</a> */}
      <a class="btn btn-success"  onClick={(el)=>{addToCart(el)}}>Add To Cart</a>
    
    </div>
    </div>

)
}

export default ViewProduct