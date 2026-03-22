// Elaborra un algoritmo con un numero limite n
// Muestre la secuencia de numero pares
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output }); 

let n = 1
const limite = Number(await rl.question("Ingresa el limite: "))
let pares =""
let impares =""

while (n<=limite) 
{
    if(n%2==0) pares = `${pares}${n}, ` // pares = pares + n +", "
    else impares = `${impares}${n}, ` // impares = impares + n +", "
    n=n+1;  
}
console.log(`Lista pares: ${pares}`)
console.log(`Lista impares: ${impares}`)
rl.close()
 