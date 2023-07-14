// hacer comunicacion con servidor

 const listaClientes = () => 
    fetch(" http://localhost:3000/perfil").then((Response)=> Response.json());
    
export const clientService = {
    listaClientes,
};