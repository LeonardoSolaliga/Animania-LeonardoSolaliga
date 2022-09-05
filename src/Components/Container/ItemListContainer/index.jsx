import React from 'react';
import "./styles.css";
import "../../ItemCount";
import ItemCount from '../../ItemCount';

const ItemListContainer=({greeting})=> {
  const agregarAlCarrito=(cantidad)=>{
    console.log(`se agrego al carrito ${cantidad}`);

  }
  return (
    <div>
        <h2>{greeting}</h2>
        <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito}/>
    </div>
  )
}

export default ItemListContainer;