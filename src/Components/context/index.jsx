import React,{useState} from 'react';
import { createContext } from "react";

//primer paso del context
export const Shop=createContext(null);

//segundo paso del context, crear un provider(proveedor) que me va  a envolver la app


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
        const productExistente=isInCart(item.id);
        if(productExistente){
            const itemDelet=cart.find(product=>product.id===item.id);
            const itemIndex=cart.indexOf(itemDelet);
            cart.splice(itemIndex,1);
            console.log("item eliminado")
        } else{
            console.log("item no encontrado");
        }
    }
    const clearCart=()=>{
        return setCart([]);
        
    }

  return (
    <Shop.Provider value={{cart,addItem}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider
