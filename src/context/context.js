
import { useState } from "react";
import { createContext } from "react";



const CartContext = createContext();

function Provider({children}){

      const [cart,setCart]=useState([]);
      const addCarts = (prod)=>{
     
        setCart([...cart,prod]);
      }
      const removeFromCart = (prod)=>{
       const arr = cart.filter(x=>x.id!==prod.id);
       setCart(arr);
      }
    const value ={
        cart,
        addCarts,
        setCart,
        removeFromCart,
    }


    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}
export default CartContext;
export {Provider} ;