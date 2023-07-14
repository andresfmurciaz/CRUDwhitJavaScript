//captura informacion

import { clientService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit",(evento)=>{
        evento.preventDefault();
        const nombre = document.querySelector("[data-nombre]").value;
        const email = document.querySelector("[data-email]").value;
        console.log(nombre,email);
// envia al post 
        clientService.crearCliente(nombre,email).then(respueta=>{

        console.log(respueta);
        }).catch(err=>console.log(respueta));
})


