import { useContext } from "react";
import CartContext from "./context/context";


const Product = ({product,cart})=>{
  debugger;
  const {addCarts,removeFromCart}=useContext(CartContext)
  let content='';

   if(cart.includes(product)) {
   content=<button onClick={()=>removeFromCart(product)}>Remove From Cart</button>
  }
 
   else{
  content= <button onClick={()=>addCarts(product)}>Add To Cart</button>
  }            
    return (
        <div key={product.id} className="product-name">
          <img src={product.image} alt="desc" />
          <div className="product-content">
            <div className="product-details">
            <label>{product.Name}</label>
            <label>Price : {product.Price}</label>
            </div>
             {content}     
          </div>
        </div>
    )
}
export default Product;