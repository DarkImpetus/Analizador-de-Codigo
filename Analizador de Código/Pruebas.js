var fs = require('fs');

fs.readFile('basico.js', 'utf8', function(err, data){
    if (err) {
        return console.log(err);//en caso de haber un error, evita que el programa se trabe 
      }

    let comentarios = /[\/][\*][a-z | a-z]+[\*][\/]/gi
    let busquedacomentarios = data.match(comentarios)

    for (let i = 0; i < busquedacomentarios.length; i++)
    {
        console.log("Reemplazando el siguiente comentario: ")
        console.log(busquedacomentarios[i])
        busquedacomentarios[i] = busquedacomentarios[i].replace(busquedacomentarios[i], "*")    
        console.log("Este es el resultado: ")
        console.log(busquedacomentarios[i])
    }

    console.log("Resultado total: ")
    console.log(busquedacomentarios)

});

