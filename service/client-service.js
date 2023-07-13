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



const http = new XMLHttpRequest(); 
//recibe dos parametros. metodo y url
http.open("GET", " http://localhost:3000/perfil");

// envia peticion
http.send();

http.onload = () => {

    const data = JSON.parse(http.response);
 
    data.forEach((perfil)=>{

    // llamo al metodo
    const lineaCreada = crearNuevaLinea(perfil.nombre,perfil.direcion);
    table.appendChild(lineaCreada);
        })

}



