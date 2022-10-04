import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { Shop } from '../../context';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';


import ordenGenerada from '../../../services/generarOrden';
import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from '../../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";


const Cart = () => {
  const {cart, removeItem, clearCart,total} = useContext(Shop);
  const navigate=useNavigate();
  const renderImage = (image) => {
    return(
      <img src={image.value} alt="cart-product" style={{height: '120px'}}></img>
    )
  }
  const botonComprar=async()=>{

    const importeTotal=total();
    const orden=ordenGenerada("agustin","agus.coder@hotmail.com",54599624,cart,importeTotal);
    const docRef = await addDoc(collection(db, "orders"), orden);
    cart.forEach(async(productoCart)=>{
      const productRef = doc(db, "products", productoCart.id);
      const productSnap=await getDoc(productRef);
      await updateDoc(productRef, {
        stock: productSnap.data().stock-productoCart.quantity
      });
      
    })
    alert(`Gracias por la compra, se genero la orden :  ${docRef.id}`);
  }

  const renderRemoveButton = (item) => {
    const product = item.value
    return (
      <Button onClick={()=>{removeItem(product)}}variant="contained" color="error">
        Remove
      </Button>
    )
  }

  const columns = [
    { field: 'image', headerName: 'Image', width: 250, renderCell: renderImage},
    { field: 'title', headerName: 'Product', width: 450 },
    {
      field: 'categoria',
      headerName: 'Category',
      width: 120,
    },
    { field: 'quantity', headerName: 'Quantity', width: 80 },
    {
      field: 'remove',
      headerName: 'Remove',
      renderCell: renderRemoveButton,
      width: 120,
    },
    {
      field: 'price',
      headerName:'precio total',
      width:200
    }

  ]
  const filas=[];
  cart.forEach(item => {
    filas.push({
      id: item.id,
      categoria:item.category,
      image: item.image,
      title: item.title,
      quantity: item.quantity,
      price:item.quantity*item.price,
      remove: item,
    })
  })

  
  const navigateItemContainer=()=>{
    navigate('/');
  }
  return (
    <div style={{ height: 400, width: '100%' }}>
      {!cart.length ?  <button onClick={navigateItemContainer}>Carrito vacio, Vuelva al inicio</button> : <DataGrid
        rows={filas}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        rowHeight={150}
        
      />
      }
      {!cart.length ? <span id="invisible"></span>:<span id="visible" className='centrarSpan'>Total: {total()}</span>}
      {!cart.length ? <button onClick={clearCart} id="invisible" color="error" variant="outlined">Borrar carrito</button>: <button onClick={clearCart} id="visible" color="error" variant="outlined">Borrar carrito</button>}
      {!cart.length ? <button onClick={botonComprar} id="invisible">Confirmar compra</button>:<button onClick={botonComprar} id="visible">Confirmar compra</button>}
    </div>
  );
}


export default Cart;