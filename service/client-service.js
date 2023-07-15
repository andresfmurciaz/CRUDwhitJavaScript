
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



export const clientService = {
    listaClientes,
    crearCliente,
    eliminarCliente
};