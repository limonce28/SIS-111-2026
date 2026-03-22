function multiplicacion(num1 :number,num2 :number) :number
{
    let num3 = num1 * num2;
    return num3;
}
console.log("Introduce el primer numero")
 let num1= prompt ("intro num");
console.log("Introduce el segundo numero")
let num2= prompt ("intro num");
console.log("Este es el resultado")
let num3 = multiplicacion( num1 ,num2)
console.log(num3)