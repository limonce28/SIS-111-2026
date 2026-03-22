import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output }); 

const x = Number (await rl.question("Introduzca el valor de X: "))

const z = (15+ (2* x /3))/(x *x +2)
console.log (`El valor de z es :${z}`)
rl.close()
