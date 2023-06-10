import { useContext } from "react";
import CartContext from "./context/context";
import Product from "./Product";

const ProductList = ({items})=>{
    debugger;
    const {addCarts,removeFromCart,cart}=useContext(CartContext);
    const productItems = items.map((item)=>{
     return <Product cart={cart} addCarts={addCarts} removeFromCart={removeFromCart}  product={item} />
    })
    return (
        <div className="product-list">
            {productItems}
        </div>
    )
}
export default ProductList;