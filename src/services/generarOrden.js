
const ordenGenerada=(nombre,email,numero,cart,total)=>{
    return{
        buyer:{
            nombre:nombre,
            email:email,
            numero:numero,

        },
        items:cart
        
        ,
        total:total
        ,
        createdAt:new Date().toLocaleString()
    }

}
export default ordenGenerada;