import React, { useState } from 'react';
import "./styles.css";
//import "../../ItemCount";
//import ItemCount from '../../ItemCount';
import ItemList from '../../ItemList';
//import { products } from '../../../data/products';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { db } from '../../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  console.log(db)

  const [productos, setProductos] = useState([]);

  const {categoryId}=useParams();

  useEffect(() => {
    (async () => {
      try {
          const q = categoryId
          ? query(collection(db, "products"),where("category","==",categoryId))
          :query(collection(db, "products"));

          const querySnapshot = await getDocs(q);
          const productosFirebase=[];
          querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          productosFirebase.push({id: doc.id,...doc.data()})
          });
          console.log(productosFirebase);
          setProductos(productosFirebase);
  

         /* const response = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`);
          const productos= await response.json();
          setProductos(productos);*/

      } catch (error) {
        console.log(error);
      }
    })()
  }, [categoryId]);


  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList products={productos} />

    </div>
  )
}

export default ItemListContainer;