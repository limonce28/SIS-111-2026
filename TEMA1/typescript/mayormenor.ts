import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output }); 

function mayor(a: number, b: number, c: number){
if(a > b && a > c) return `Mayor: ${a}`;
else if(b > a && b > c) return `Mayor: ${b}`;
else return `Mayor: ${c}`;
}

function menor(a: number, b: number, c: number){
if(a < b && a < c) return `Menor: ${a}`;
else if(b < a && b < c) return `Menor: ${b}`;
else return `Menor: ${c}`;
}

console.log("********Mayor Menor**********")
const a = Number (await rl.question("Introduzca el valor de a: "))
const b = Number (await rl.question("Introduzca el valor de b: "))
const c = Number (await rl.question("Introduzca el valor de c: "))

console.log(mayor(a,b,c));
console.log(menor(a,b,c));
rl.close();
