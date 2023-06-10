import { useContext } from "react";
import { useEffect, useState } from "react";
import CartContext from "./context/context";
import Product from "./Product";


const Cart = ()=>{
    const [total,setTotal]=useState();
    const {cart} =useContext(CartContext);

    useEffect(()=>{
    setTotal(cart.reduce((acc,cur)=>{
    return acc+parseInt(cur.Price)
    },0));
    },[cart])
    debugger;
    const productItems = cart.map((item)=>{
        return <Product product={item} cart={cart} />
       })
    return (
        <div>
            <span style={{fontSize:'33px'}}>My Cart</span>
            <span style={{fontSize:'33px'}}>Total :{total}</span>
             <div className="product-list">
            {productItems}
             </div>
        </div>
    )
}
export default Cart;