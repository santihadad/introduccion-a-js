//Desafio #1
/*
for (let i=10; i>0; i--){
    console.log(i)
}
*/

//Desafio #2
/*
for (let i=1; i<=100; i += 2){
    console.log(i)
}
*/

//Desafio #3
/*
for(var i = 1; i <= 10; i++)
{
    let tabla = "7 * " + i + " = " + 7 * i;
    console.log(tabla);
}
*/

//Desafio #4
/*
for (let x=1; x<=10; x++){
    console.log (`Tabla del ${x}`)

    for(let y = 1; y <= 10; y++)
    {
    let tabla = x + " * " + y + " = " + x * y;
    console.log(tabla);
    }
}
*/

//Desafio #5
/*
let suma = 0
for (i=1; i<=10; i++){
    suma = suma + i
}

console.log(suma)
*/

//Desafio #6
/*
let factorial = 1;
for (i=1; i<=10; i++){
    factorial = factorial * i;
}
console.log(factorial);
*/

//Desafio #7
/*
let suma = 0;
for (i=11; i<=30; i+=2){
    suma += i
}
console.log(suma);
*/

//Desafio #8
/*
let gradosCelsius = Number(prompt('Ingrese un valor de Grados Celsius'));
function celsiusAFharenheit(gradosCelsius){
    return (gradosCelsius * 1.8) + 32
}
console.log(celsiusAFharenheit(gradosCelsius));
*/

//Desafio #9
/*
let gradosFharenheit = Number(prompt('Ingrese un valor de Grados Fharenheit'));
function fharenheitACelsius(gradosFharenheit){
    return (gradosFharenheit -32)/1.8
}
console.log(fharenheitACelsius(gradosFharenheit));
*/

//Desafio #10
/*
const numeros = [1,2,3,4,5,6,7,8,9,10];
let suma = 0;
function sumaArray(numeros){

    for (let i = 0; i < numeros.length; i++ ){
        suma += numeros[i];
    }
    return suma;
}
console.log(sumaArray(numeros));
*/

//Desafio #11
/*
const numeros = [1,2,3,4,5,6,7,8,9,10];
let denominador = numeros.length
let suma = 0;
function promedioArray(numeros){
    for (let i = 0; i < numeros.length; i++){
    suma += numeros[i];
    }
    return suma / denominador
}
console.log(promedioArray(numeros))
*/

//Desafio #12
/*
const numeros = [1,2,-3,4,5,-6,7,8,-9,10];
let soloPositivos = [];
function filtrarPositivos(numeros){
    for (i=0; i<numeros.length; i++){
        if (numeros[i]>0){
            soloPositivos.push(numeros[i]);
        }
    }
    return soloPositivos;
}
console.log(filtrarPositivos(numeros));
*/

//Desafio #13
/*
const numeros = [1550, 2125,67894,37548,92845,124563,];
let maximo = 0;
function encontrarMax (numeros){
    for (i=0; i<numeros.length; i++);
    {
        if (numeros[i] > maximo);
        {
        maximo = numeros [i];
        }
    }
return maximo;
}
console.log(encontrarMax(numeros));
*/

//Desafio #14
/*
let fib0 = 0;
console.log(fib0);
let fib1 = 1;
console.log(fib1);
let fib;
for (i=2; i<10; i++)
{
    fib = fib0 + fib1;
    fib0 = fib1;
    fib1 = fib;
    console.log(fib);
}
*/

//Desafio #15


