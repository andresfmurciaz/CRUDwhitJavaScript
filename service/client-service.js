const http = new XMLHttpRequest(); 
//recibe dos parametros. metodo y url

http.open("GET", " http://localhost:3000/perfil");

// envia peticion
http.send();

http.onload = () => {

    const data = http.response;
    console.log(data);
}

