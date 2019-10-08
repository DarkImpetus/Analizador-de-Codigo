var fs = require('fs');

fs.readFile('basico.js', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }

  var expresion1 = /[a-z]+[ ][=][ ][a-z|\d]+[ ][+|\-|\*|\/][ ][a-z|\d]\b/gi //encuentra expresiones matemáticas sencillas
  var expresion2 = /[a-z|\d]+[ ][>|<][=| ]["true"|"false"|0|1 ]+/gi//encuentra expresiones booleanas sencillas
  var expresion3 = /[\/][\*][a-z | a-z]+[\*][\/]/gi//encuentra los comentarios
  var expresion4 = /[\"][a-z | \d|\d |\-|\/]+[\"]/gi//encuentra cadenas de texto


  var busqueda1 = data.match(expresion1)//almacena todas las expresiones matematicas sencillas
  var busqueda2 = data.match(expresion2)//almacena todas las expresiones booleanas sencillas
  var busqueda3 = data.match(expresion3)//almacena todas los comentarios
  let busqueda4 = data.match(expresion4)//almacena todas las cadenas de texto para mostrar
  let busquedaAux = data.match(expresion4)//almacena todas las cadenas de texto para encriptar
  let auxiliar2 = data.match(expresion3)
  

  for (let i= 0; i < busqueda3.length; i++) { //(reemplazar 20 pts) borra los comentarios
    console.log("Estoy reemplazando: " + busqueda3[i]);
    busqueda3[i] = busqueda3[i].replace(busqueda3[i],"aqui borreeeeeeeeee");
    console.log("Resultado: ")
    console.log(busqueda3[i])
  
  }

  for (let i= 0; i < busqueda4.length; i++) { //(encriptar 20 pts) Encripta las cadenas de texto
    console.log("Estoy encriptando: " + busquedaAux[i]);
    busqueda4[i] = busqueda4[i].replace(/[aeiou]/gi,"*");
    console.log("Resultado: ")
    console.log(busqueda4[i])
  
  }

  for (let i= 0; i < busqueda3.length; i++) { //(reemplazar 20 pts) borra los comentarios en el codigo final
    console.log("Estoy reemplazando en el codigo final: " + busqueda3[i]);
    data = data.replace(auxiliar2[i],"aqui borreeeeeeeeee");
    
  
  }

  for (let i= 0; i < busquedaAux.length; i++) { //(encriptar 20 pts) Encripta las cadenas de texto en el codigo final
    console.log("Estoy encriptando en el codigo final: " + busquedaAux[i]);
    data = data.replace(busquedaAux[i],busqueda4[i]);
    
  }

  
  console.log("Este es busqueda1: ")
  console.log(busqueda1)
  console.log("Este es busqueda2: " )
  console.log(busqueda2)
  console.log("Este es busqueda3 final: ")
  console.log(busqueda3);
  console.log("Este es busqueda4 final: ")
  console.log(busqueda4);

  console.log("Codigo despues de los cambios: ")
  console.log(data)





 



});
