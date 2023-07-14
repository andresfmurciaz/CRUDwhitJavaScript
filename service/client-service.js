const crearNuevaLinea =(nombre,direcion) =>{
// crea un elemento html tr para envolver fila
       const linea = document.createElement("tr");    

       const fila =    

        `<td class="td" data-td>${nombre}</td>
                <td>${direcion}</td>
                <td>
                <ul class="table__button-control">
                    <li>
                    <a
                        href="../screens/editar_cliente.html"
                        class="simple-button simple-button--edit"
                        >Editar</a
                    >
                    </li>
                    <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button"
                    >
                        Eliminar
                    </button>
                    </li>
                </ul>
                </td>
            
                `;
                
            linea.innerHTML= fila;
            return linea;
};

// recorre todo el DOM y busca donde esta este nombre que es donde queremos que este la
const table = document.querySelector("[data-table]");


    const listaClientes = () => fetch(" http://localhost:3000/perfil").then((Response)=> Response.json());
    


    

    listaClientes().then((data)=>
    {

        console.log(data);
        data.forEach((perfil)=>{
            // se pone el nombre del json
            const nuevaLinea = crearNuevaLinea(perfil.nombre,perfil.email);
            table.appendChild(nuevaLinea);
        })
    })










data.forEach((perfil)=>{

    // llamo al metodo
    const lineaCreada = crearNuevaLinea(perfil.nombre,perfil.direcion);
    table.appendChild(lineaCreada);
        })