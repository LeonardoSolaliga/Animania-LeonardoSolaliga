import React, { useState } from 'react';
import "./styles.css";
//import "../../ItemCount";
//import ItemCount from '../../ItemCount';
import ItemList from '../../ItemList';
//import { products } from '../../../data/products';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const {categoryId}=useParams();
  useEffect(() => {
    (async () => {
      try {
        if (categoryId){
          const response = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`);
          const productos= await response.json();
          setProductos(productos);
  
        }
        else{
          const response = await fetch("https://fakestoreapi.com/products");
          const productos= await response.json();
          setProductos(productos);
        }

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