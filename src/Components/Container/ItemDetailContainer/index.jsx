import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from '../../ItemDetail'

const ItemDetailContainer = () => {

    const[productDetail, setproductDetail]=useState({})

    
    useEffect(()=>{
        const getProductos=async()=>{
            
            try{
                const response=await fetch("https://fakestoreapi.com/products/1");
                const producto= await response.json();
                setproductDetail(producto);
            } catch(error){
                console.log(error);
            }
            
        }
        getProductos();

    },[])
  console.log(productDetail);
  
    return (
    <ItemDetail product={productDetail}/>
  )
}

export default ItemDetailContainer