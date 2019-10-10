function busquedaMatematica() {

    var expresion1 = /[a-z]+[ ][=][ ][a-z|\d]+[ ][+|\-|\*|\/][ ][a-z|\d]\b/gi //encuentra expresiones matemáticas sencillas
    var data1 = document.getElementById("fileOutput").innerHTML;
    var busqueda1 = data1.match(expresion1)//almacena todas las expresiones matematicas sencillas
    document.getElementById("MuestraMate").innerHTML = busqueda1;
    
};

function busquedaBooleana() {

    var expresion2 = /[a-z|\d]+[ ][&gt;|&lt;]+[=| ]["true"|"false"|0|1 ]+/gi//encuentra expresiones booleanas sencillas
    var data2 = document.getElementById("fileOutput").innerHTML;
    var busqueda2 = data2.match(expresion2)//almacena todas las expresiones booleanas sencillas
    document.getElementById("MuestraBool").innerHTML = busqueda2;
    console.log(data2);
};