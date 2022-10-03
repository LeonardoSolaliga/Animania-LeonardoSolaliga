
const ordenGenerada=(nombre,email,numero,cart,total)=>{
    return{
        buyer:{
            nombre:nombre,
            email:email
        },
        items:cart
        ,
        numero:numero
        ,
        total:total
        ,
        createdAt:new Date().toLocaleString()
    }

}
export default ordenGenerada;