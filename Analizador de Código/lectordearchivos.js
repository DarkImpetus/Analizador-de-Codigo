var fs = require('fs');

fs.readFile('basico.js', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }

var expresion1 = /[a-z]+[ ][=][ ][a-z|\d]+[ ][+|\-|\*|\/][ ][a-z|\d]\b/gi
var expresion2 = /[a-z|\d]+[ ][=\>|=\<|=|\<|\>][ ][a-z|\d]+\b/gi
var expresion3 = /[\/][\*][a-z | a-z]+[\*][\/]/gi


var busqueda = data.match(expresion1)
var busqueda2 = data.match(expresion2)
var busqueda3 = data.match(expresion3)
let busqueda4 = data.match(/[\"][a-z | \d|\d |\-|\/]+[\"]/gi);
var busqueda5 = data;


busqueda5.replace(/[\"][a-z | \d|\d |\-|\/]+[\"]\b/gi,"*");
console.log(busqueda);
console.log(busqueda2);
console.log(busqueda3);
console.log(busqueda4);


 console.log(busqueda5);



});
