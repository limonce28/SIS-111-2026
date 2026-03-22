def calculadora (num1,num2,operacion):
    if operacion == "+":
        return num1 + num2
    elif operacion == "-":
        return num1 - num2
    elif operacion == "*":
        return num1 * num2
    elif operacion == "/":
        if(num2!=0):
         return num1 / num2
        else: return "Error: No se puede dividir por cero"
    else: return "Error"

print("CALCULADORA")
print("***************")
print("Introduzca el primer número")
n1 = float(input())
print ("Introduzca la operacion (+, -, *, /) : ")
op = input()
print ("Introduzca el segundo número")
n2 = float(input())
print ("El resultado es")
print(calculadora(n1,n2,op))

#String interpolation
# print(f"El resultado es {calculadora(n1,n2,op)}")
#Esto significa que el resultado de la función calculadora se insertará directamente en la cadena de texto, lo que hace que el código sea más legible y fácil de escribir.
    
    
