import React, { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from '../../ItemDetail';
import {useParams} from 'react-router-dom';


const ItemDetailContainer = () => {

    const[productDetail, setproductDetail]=useState({})
    const {productId}=useParams()
    console.log(productId);

    
    useEffect(()=>{
        const getProductos=async()=>{
            
            try{
                const response=await fetch(`https://fakestoreapi.com/products/${productId}`);
                const producto= await response.json();
                setproductDetail(producto);
            } catch(error){
                console.log(error);
            }
            
        }
        getProductos();

    },[productId])
  console.log(productDetail);
  
    return (
    <ItemDetail product={productDetail}/>
  )
}

export default ItemDetailContainer