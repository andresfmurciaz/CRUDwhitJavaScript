
//GET
 const listaClientes = () => 
    fetch(" http://localhost:3000/perfil").then((Response)=> Response.json());
  
// POST 
const crearCliente = (nombre,email)=>
{
    return fetch("http://localhost:3000/perfil",
    {
    method:"POST",
    headers:
    {
        "content-Type":"application/json",
    },body:JSON.stringify({nombre,email,id:uuid.v4()})
    });

}

//DELETE

const eliminarCliente = (id)=>
{
     return fetch(`http://localhost:3000/perfil/${id}`,
    {
    method:"DELETE", 
    })
}

//UPDATE
const detalleCliente = (id) =>
{
return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());
}

 const actualizarCliente = (nombre,email,id)=>{

    return fetch(`http://localhost:3000/perfil/${id}`,{
        method :"PUT",
        headers:{
            "content-Type":"application/json"
        },
        body:JSON.stringify({nombre,email})
    })
    .then(respuesta=> respuesta)
    .catch((err)=> console.log(err))
 }



export const clientService = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente 
};