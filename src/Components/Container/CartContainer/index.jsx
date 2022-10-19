import React,{useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { Shop } from '../../context';
import { DataGrid } from '@mui/x-data-grid';
import { Button,CircularProgress } from '@mui/material';
import ordenGenerada from '../../../services/generarOrden';
import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from '../../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import { useForm } from '../../Hooks/useForm';


const initialForm={
    nombre:"",
    email:"",
    telefono:""
  };
const validationsForm=(form)=>{
    let errors={};
    let tel= /^\d{7,14}$/
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    if(!form.nombre.trim()){
        errors.nombre="el campo 'Nombre' es requerido";
    }else if(!regexName.test(form.nombre.trim())){
      errors.nombre="El campo 'Nombre' solo acepta letras y espacios en blanco"
    }

    if(!form.email.trim()){
      errors.email="el campo 'Email' es requerido";
    }else if(!regexEmail.test(form.email.trim())){
    errors.email="El campo 'Email' es incorrecto"
  }

    if(!form.telefono.trim()){
    errors.telefono="el campo 'Telefono' es requerido";
}else if(!tel.test(form.telefono.trim())){
  errors.telefono="El campo 'telefono' es entre 7 a 14 numeros"
}

    return errors;
  };

const Cart = () => {
  const{
    form,
    errors,
    handleChange,
    handleBlur,
  }=useForm(initialForm,validationsForm);
  const {cart, removeItem, clearCart,total} = useContext(Shop);
  const [accept,setAccept]=useState(false);
  const [loading, setLoading] = useState(false);
  const [ord,setOrd]=useState("")
  const navigate=useNavigate();
  const renderImage = (image) => {
    return(
      <img src={image.value} alt="cart-product" style={{height: '120px'}}></img>
    )
  }
  const botonComprar=async()=>{
    setLoading(true)
    const importeTotal=total();
    const orden=ordenGenerada(form.nombre,form.email,parseInt(form.telefono),cart,importeTotal);
    const docRef = await addDoc(collection(db, "orders"), orden);
    cart.forEach(async(productoCart)=>{
      const productRef = doc(db, "products", productoCart.id);
      const productSnap=await getDoc(productRef);
      await updateDoc(productRef, {
        stock: productSnap.data().stock-productoCart.quantity
      });
      
    })
    setLoading(false);
    setOrd(docRef.id);
    document.getElementById('modalOrden').style.display='flex';
    clearCart();
    
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
  const botonDatos=()=>{
    let disp=document.getElementById('formulario');
    disp.style.display='flex';
    let cancel=document.getElementById('formulario');
    cancel.style.display='flex';
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(Object.keys(errors).length===0){
      setAccept(true);
      let disp=document.getElementById('formulario');
      disp.style.display='none';


    }
}

  const cancel=(e)=>{
    e.preventDefault();
    let cancelar=document.getElementById('formulario');
    cancelar.style.display='none';
    document.getElementById('myform').reset();
  }
  const handleAceptar=(e)=>{

    e.preventDefault();
    let cancelar=document.getElementById('modalOrden');
    cancelar.style.display='none';
  }
  return (
    <>
    <div id='formulario' >
      <form id='myform' onSubmit={handleSubmit}>
        <div className='formularios'>
        <label className='text' htmlFor="nombre">Nombre: </label>
        <input
        type="text" 
        name="nombre" 
        placeholder='escribe tu nombre y apellido' 
        onBlur={handleBlur}
        onChange={handleChange} 
        value={form.name} 
        required/>{errors.nombre &&<p className='error'>{errors.nombre}</p>}
        <label className='text' htmlFor="email">E-mail: </label>
        <input
        type="email" 
        name="email" 
        placeholder='escribe tu email' 
        onBlur={handleBlur}
        onChange={handleChange} 
        value={form.email} 
        required/>{errors.email &&<p className='error'>{errors.email}</p>}
        <label className='text' htmlFor="telefono">Telefono: </label>
        <input
        type="number" 
        name="telefono" 
        placeholder='escribe tu telefono' 
        onBlur={handleBlur}
        onChange={handleChange} 
        value={form.telefono} 
        required/>{errors.telefono &&<p className='error'>{errors.telefono}</p>}
        <div>
        <input type="submit" value="Enviar"/>
        <button id='botonCancel' onClick={cancel}>Cancelar</button>
        </div>
        </div>
      </form>
      
    </div>
    
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
      {!cart.length ? <button id="invisible"></button>:(accept ?       (loading ? (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        alignItems: "center",
                    }}
                >
                    <CircularProgress/>
                </div>
            ) : (
                <button onClick={botonComprar}>Confirmar compra</button>
            )):<button onClick={botonDatos}>Ingresar datos para finalizar</button>)}
      <div id='modalOrden'><div className='cuadroModal'>gracias por la compra, su numero de orden es: {ord}<button onClick={handleAceptar}>Aceptar</button></div></div>
    </div>
    </>
  );
}


export default Cart;