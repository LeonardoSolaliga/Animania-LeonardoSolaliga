import React,{useState} from 'react';
import { createContext } from "react";

export const Shop=createContext(null);



const ShopProvider = ({children}) => {
    const [cart,setCart]=useState([])


    const addItem=(item)=>{
        const productRepetido=isInCart(item.id);
        if(productRepetido){
            const cartModificadoMap=cart.map(product=>{
                if(product.id===item.id){
                    product.quantity+=item.quantity;
                    return product;
                }
                return product;
            })
            setCart(cartModificadoMap);

        } else{
            const cartModificado=[...cart,item];
            setCart(cartModificado);
        }

    }
    const isInCart=(id)=>{
        return cart.some(product=>product.id===id);
    }
    const removeItem=(item)=>{

        const filteredProducts = cart.filter(product=> product.id !== item.id);
        setCart(filteredProducts);
    }
    const clearCart=()=>{
        return setCart([]);
        
    }
    const total=()=>{
        const total=cart.reduce((a,b)=>a+=(b.quantity*b.price),0);
        return total;

    }

  return (
    <Shop.Provider value={{cart,addItem,removeItem,clearCart,total}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider
