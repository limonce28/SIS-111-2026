def mayor (a, b, c):
    if (a> b and a > c) :
        return f'"Mayor : {a}'
    elif (b > a and b > c):
        return f'"Mayor : {b}"'
    else: 
        return f' "Mayor : {c}"'
def menor (a, b, c):
    if (a< b and a < c) :
        return f'"Menor : {a}'
    elif (b < a and b <c):
        return f'"Menor : {b}"'
    else: 
        return f' "Menor : {c}"'


print ("****MAYOR MENOR****")
print("Introduzca el valor de a:")
a = int (input())
print("Introduzca el valor de b:")
b = int (input())
print("Introduzca el valor de c:")
c = int (input())
print(mayor(a,b,c))
print(menor(a,b,c))