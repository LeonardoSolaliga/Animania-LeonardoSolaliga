import React, { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from '../../ItemDetail';
import { useNavigate, useParams} from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../../firebase/config';


const ItemDetailContainer = () => {

    const[productDetail, setproductDetail]=useState({})
    const [loading,setLoading]=useState(false)
    const {productId}=useParams()
    const navigate = useNavigate();

    
    useEffect(()=>{
        const getProductos=async()=>{
            
            try{
                setLoading(true);

                
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
            setLoading(false);
            
        }
        getProductos();
        

    },[productId,navigate])
  
    return (
    <>
    {loading  ? <h2>Loading</h2>:<ItemDetail product={productDetail}/>}
    </>
  )
}

export default ItemDetailContainer