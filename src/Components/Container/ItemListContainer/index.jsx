import React, { useState } from 'react';
import "./styles.css";
//import "../../ItemCount";
//import ItemCount from '../../ItemCount';
import ItemList from '../../ItemList';
import { products } from '../../../data/products';
import { useEffect } from 'react';

const ItemListContainer = ({ greeting }) => {

  /*const agregarAlCarrito=(cantidad)=>{
    console.log(`se agrego al carrito ${cantidad}`);

  }<ItemCount initial={1} stock={5} onAdd={agregarAlCarrito}/>*/
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    (async () => {
      const obtProductos = new Promise((accept, reject) => {
        setTimeout(() => {
          accept(products)
        }, 2000);
      })
      try {
        const productos = await obtProductos;
        setProductos(productos);
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])


  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList products={productos} />

    </div>
  )
}

export default ItemListContainer;