function Encriptar() {
    var str = document.getElementById("fileOutput").innerHTML;
    var expresion4 = /[\"][a-z | \d|\d |\-|\/]+[\"]/gi//encuentra cadenas de texto
    let busqueda4 = str.match(expresion4)//almacena todas las cadenas de texto para mostrar
    let busquedaAux = str.match(expresion4)//almacena una copia de todas las cadenas de texto para encriptar
    var txt = document.getElementById("fileOutput").innerHTML;

    console.log(busquedaAux)
    

    for (let i= 0; i < busqueda4.length; i++) { //(encriptar 20 pts) Encripta las cadenas de texto
        console.log("Estoy encriptando: " + busquedaAux[i]);
        busqueda4[i] = busqueda4[i].replace(/[aeiou]/gi,"*");
        console.log("Resultado: ")
        console.log(busqueda4[i])
      
      }



    console.log("busqueda4: ")
    console.log(busqueda4)
    console.log("busqueda4Aux: ")
    console.log(busquedaAux)

    for (let i= 0; i < busquedaAux.length; i++) { //(encriptar 20 pts) Encripta las cadenas de texto en el codigo final
        console.log("Estoy encriptando en el codigo final: " + busquedaAux[i]);
         txt= txt.replace(busquedaAux[i],busqueda4[i]);
        
    }

    document.getElementById("explicacionencripta").innerHTML = busquedaAux;
    document.getElementById("Muestraencripta").innerHTML = txt;
}