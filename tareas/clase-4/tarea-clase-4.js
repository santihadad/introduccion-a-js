// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.
/*
let nuevoNumero
for (i=3; i<=22; i+=3){
    nuevoNumero = i
    console.log(nuevoNumero)
}
*/
// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.
/*
let numero = 10;
while (numero >= 1){
    console.log (numero)
    numero = numero - 1
}
*/

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

/*
for (i=1; i<=50; i++){
    let multiploTres = i % 3;
    let multiploCinco = i%5;
    let multiploTresyCinco = i%3 + i%5;
    if (multiploTresyCinco === 0){
        console.log ('FizzBuzz')
    }
    else if (multiploTres === 0){
        console.log('Fizz')
    }
    else if (multiploCinco === 0){
        console.log('Buzz')
    }
    else {
        console.log(i)
    }


}
*/

/*
// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])
/*
let array = [10,5,4,2,8]
let suma = 0
function calcularPromedio(array){
    for (i=0; i<array.length; i+=1){
        suma += array[i]
    }
    return suma / array.length
}
console.log (calcularPromedio(array))
*/


// Aca podemos ver el parametro por default, con un ejemplo
/*
function verificarEdadEntrada(edad = 18) {
    if (edad >= 18) {
        console.log('Bienvenido al bar')
    }
    else {
        console.log('Sos menor de edad')
    }
}

verificarEdadEntrada(15)
*/
// Operador ternario, vamos a usar la misma funcion que arriba. La funcion de arriba es equivalente a esta
// Toma la condicion de izquierda o derecha (true or false)

/*
function verificarEdadEntrada(edad = 18) {
    edad >= 18 ? console.log('Bienvenido al bar') : console.log('Sos menor de edad')
}
verificarEdadEntrada(17)
*/

// Dudas acerca del ++variable o el variable++
/*
function testearClase5(){
    let x = 0
    let y = ++x
    let z = x++
    console.log(z)
}
testearClase5()
*/

//Expresiones de funciones
/*
let z  = function(){
    console.log('Esta es la funcion Z')
}
z()
*/

function sumar (n1,n2){
    return n1+n2
}

const restar = function (n1,n2){  //aca podemos asignar a restar el equivalente a una funcion, y llamarla en la ultima linea ya que tiene esa funcion asignada
    return n1-n2
}

function tareaOperador (funcionOperador ,n1, n2){
    console.log (funcionOperador(n1,n2))
}

tareaOperador (restar, 1, 2)