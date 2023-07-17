import { clientService } from "../service/client-service.js"

const obtenerInformacion = () =>{
    const url = new URL(window.location)
    const id = url.searchParams.get("id")

if(id==null){
window.location.href="/screens/error.html"
}else{

}


    const nombre = document.querySelector("[data-nombre]") 

    const email = document.querySelector("[data-email]")

    console.log(nombre,email)

    clientService.detalleCliente(id).then((perfil)=>{

        nombre.value= perfil.nombre;
        email.value=perfil.email;
    });  
    
    
}

obtenerInformacion();
