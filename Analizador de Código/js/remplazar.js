function Reemplazar() {
    var str = document.getElementById("fileOutput").innerHTML;
    var expresion3 = /[\/][\*][a-z | a-z]+[\*][\/]/gi//encuentra los comentarios
    var busqueda3 = str.match(expresion3)//almacena todas los comentarios
    var txt = str.replace(expresion3, "");
    document.getElementById("explicacioncomentarios").innerHTML = busqueda3;
    document.getElementById("Muestracomentario").innerHTML = txt;
}