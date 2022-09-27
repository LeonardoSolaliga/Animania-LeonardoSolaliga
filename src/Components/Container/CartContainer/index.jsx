import React,{useContext} from 'react'
import { Shop } from '../../context';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './styles.css';


const Cart = () => {
  const {cart, removeItem, clearCart} = useContext(Shop);
  const navigate=useNavigate();
  const renderImage = (image) => {
    return(
      <img src={image.value} alt="cart-product" style={{height: '120px'}}></img>
    )
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
        rowHeight={'150px'}
        
      />
      }
      {!cart.length ? <button onClick={clearCart} id="invisible" color="error" variant="outlined">Borrar carrito</button>: <button onClick={clearCart} id="visible" color="error" variant="outlined">Borrar carrito</button>}
    </div>
  );
}


export default Cart;