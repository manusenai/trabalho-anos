const biblioteca = require("readline-sync");
const mes = 30;
let n1: number = parseFloat(biblioteca.question("Informe o dia: "));
let n2: number = parseFloat (biblioteca.question("Informe o mes: " )) + mes;
let n3: number = parseFloat (biblioteca.question("Informe o ano: "));
let soma: number = n1 + mes;
console.log("Quantos dias se passaram: " + soma);