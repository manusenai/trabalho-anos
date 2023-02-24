var biblioteca = require("readline-sync");
var mes = 30;
var n1 = parseFloat(biblioteca.question("Informe o dia: "));
var n2 = parseFloat(biblioteca.question("Informe o mes: ")) + mes;
var n3 = parseFloat(biblioteca.question("Informe o ano: "));
var soma = n1 + mes;
console.log("Quantos dias se passaram: " + soma);
