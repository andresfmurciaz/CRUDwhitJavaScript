import { clientService } from "../service/client-service.js"

const obtenerInformacion = () =>{
    const url = new URL(window.location)
    const id = url.searchParams.get("id")
    clientService.detalleCliente(id).then((perfil)=>console.log(perfil));    
}

obtenerInformacion();
