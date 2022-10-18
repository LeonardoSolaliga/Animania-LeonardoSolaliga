import React, { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from '../../ItemDetail';
import { useNavigate, useParams} from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../../firebase/config';


const ItemDetailContainer = () => {

    const[productDetail, setproductDetail]=useState({})
    const {productId}=useParams()
    const navigate = useNavigate();

    
    useEffect(()=>{
        const getProductos=async()=>{
            
            try{
                

                
                const docRef = doc(db, "products", productId);

                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setproductDetail({id:docSnap.id, ...docSnap.data()});
                } else {
                    navigate('/');
                }
                
            } catch(error){
                console.log("error");
            }
            
        }
        getProductos();

    },[productId,navigate])
  
    return (
    <ItemDetail product={productDetail}/>
  )
}

export default ItemDetailContainer