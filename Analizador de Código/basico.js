let re1 = new RegExp("abc");
let re2 = /[0-9]/;

let c = 1;

let suma = 9 + c;
let resta = b - 7;
let x = 1

if( x >= 0 )
{
    console.log("equis es mayor o igual a cero")
}


result = re1.test("abc"); //true
console.log(result);
result = re2.test("Aniversario en 1985");
console.log(result); //true

let re3 = /\d+[-|/]\d+[-|/]\d+/;
console.log(re3.test("13/7/1991"));
console.log(re3.test("18-06-1999"));

let re4 = /\d\d+[-|/]\d\d+[-|/]\d\d\d\d+/;
let re5 = /(\d{1,2})[-|/](\d{1,2})[-|/](\d{4})/;

let re6 = /[aeiou]/;
console.log(re6.test("start")); //true

/*Edo*/

/*Reemplaza todas las vocales en la palabra correcaminos*/
let mensaje = "Lapicero";
let newMensaje = mensaje.replace(/[^aeiou]$/g,"*");
console.log(newMensaje);

let mensaje2 = "El 20 de enero de 2019 se dio inicio a la 3 semana nacional de tecnologia";
let newMensaje2 = mensaje2.replace(/[a-z]{4,}/g,"*");
console.log(newMensaje2);

var letra = " \
Y si te parece que yo estoy enamorado tuyo, \
Eso es un invento, intuyo, no des crédito a murmullos \
Porque casi nunca llamo para decir que te amo \
Y más de una vez lo hice a un numero equivocado \
Casi nunca nadie dice que yo estoy enamorado tuyo \
";

var expresion = /[A-Z][^aeiou ][a-z]+/g
result = letra.match(expresion);
console.log(result);