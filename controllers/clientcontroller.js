// recibe la DATA de los endpoints

import { clientService } from "../service/client-service.js";

// CREAR CLIENTE
const crearNuevaLinea =(nombre,direcion,id) =>{
    
        // crea un elemento html tr para envolver fila
           const linea = document.createElement("tr");    
    
           const fila =    
    
            `<td class="td" data-td>${nombre}</td>
                    <td>${direcion}</td>
                    <td>
                    <ul class="table__button-control">
                        <li>
                        <a
                            href="../screens/editar_cliente.html?id=${id}"
                            class="simple-button simple-button--edit"
                            >Editar</a
                        >
                        </li>
                        <li>
                        <button
                            class="simple-button simple-button--delete"
                            type="button" id="${id}">
                            Eliminar
                        </button>
                        </li>
                    </ul>
                    </td>
                
                    `;
                    
                linea.innerHTML= fila;
                const btn = linea.querySelector("button");
                btn.addEventListener("click",()=>{
                    const id = btn.id;
                    // le mando el id capturado al delete
                    clientService.eliminarCliente(id).then(Response =>{console.log(Response)}).catch((err)=>alert("ocurrio un error"))
                })
             
                return linea;
    };
    
    
    
    // recorre todo el DOM y busca donde esta este nombre que es donde queremos que este la lista
    const table = document.querySelector("[data-table]");
    

    clientService.listaClientes()
    .then((data)=>
    {
        data.forEach(({nombre,email,id})=>
        {
            const nuevaLinea = crearNuevaLinea(nombre,email,id);
            table.appendChild(nuevaLinea);
        })
    })






    const eliminarCliente = (id) =>{
console.log("eliminadoooooooooooooooooooooooooo")
        
    }



