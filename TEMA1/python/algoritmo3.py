n = 1
limite = int(input("Ingresa el limite: "))
pares =""
impares =""

while (n<=limite): 
    if(n%2==0): pares = pares + str(n) +", "
    else :  impares = impares + str(n) +", "
    n=n+1;  
print(f"Lista pares: {pares}")
print(f"Lista impares: {impares}")
