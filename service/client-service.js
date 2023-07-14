// hacer comunicacion con servidor con los datos que le llegan

 const listaClientes = () => 
    fetch(" http://localhost:3000/perfil").then((Response)=> Response.json());
  
    
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

export const clientService = {
    listaClientes,
    crearCliente
};