// // * 1- Escribir una funcion de comparacion para ordenar un array de numeros de mayor a menor (hecho)
// // * 2- Escribir una funcion de comparacion para ordenar un array de booleanos poniendo primero los false y luego los true
// // * 3- Escribir una funcion de comparacion para ordenar un array de strings por su longitud de caracteres de menor a mayor
// // * 4- Escribir una funcion para filtrar un array de numeros dejando solo los numeros pares
// // * 5- Escribir una funcion para filtrar un array de numeros dejando solo los mayores de 30
// // * 6- Escribir una funcion para filtrar un array de booleanos dejando solo los valores true
// // * 7- Escribir una funcion para filtrar un array de strings dejando los que su longitud sea impar


// //ejercicio1 (sort)

// // let firstArray = [3, 5, 6, 8, 1, 2, 0, 3, 7, 7, 8, 4]; //array que se usa
// // function leastToGreater (a,b){
// //     return a-b;
// // }
// // function greaterToleast(a,b){ //a y b son los numeros que va a comparar

// //     return b-a; //b tiene que ser mayor para que el numero grande vaya primero
// // }
// // console.log (firstArray.sort(greaterToleast)); //primera function + la segunda (donde se comparan los numeros)

// // // //ejercicio 2

// // let booleanarray = [true, false, false, false, true, false]; //similar al ejercicio anterior pero se le da valor booleano.

// // console.log (booleanarray.sort(leastToGreater));

// // // //ejercicio 3

let stringArray = ['pizza','fresas','pepino', 'aceituna', 'salmorejo', 'aguacate', 'pan'];
// // function lengthorder (a,b){

// //     return a.length-b.length;
// // }
// // console.log (stringArray.sort(lengthorder));

// // // //ejercicio 4 (filtros):
// // function onlyEvens (value){
// //     return value%2 === 0;
// // }
// // console.log (firstArray.filter(onlyEvens));

// // // //ejercicio 5
// // let otherArray = [400,30,20,501,298,40,65,14,21];
// // function greaterthan30 (value){
// //     return value >30;
// // }
// // console.log (otherArray.filter(greaterthan30));

// // // //ejercicio 6
// // function onlyTrue (value){
// //     return value !== false;
// // }
// // console.log (booleanarray.filter(onlyTrue));

// // //ejercicio 7
// // function evenString (value){
// //     return value.length%2===0;
// // }
// // console.log (stringArray.filter(evenString));


// //__________________________________________________________________________________
// //ejercicios tarde
// // 7- (Medium) Crear una funcion que dado un array bidimensional de strings, lo convierta a un array unidimensional con todos los strings consegutivos.
// //    EJ: [['a','b'], ['c','d']] => ['a','b','c','d']
// // 8- (Hard)Cuando vamos a urgencias, nos atienden en recepción y nos asignan un orden para ser atendido.
// //   Este orden va en funcion de dos factores:
// //      1.- Orden de llegada a urgencias
// //      2.- Criticidad de la urgencia
// //   Construir una función "siguientePaciente" que dados dos arrays de la misma longitud
// //    - EL primer array es el de los nombres de los pacientes en orden de llegada
// //    - El segundo array representa la criticidad asociada a cada paciente
// //   El array de criticidad está asociado con el array de nombres por su posicion de forma que:
// //   El paciente en la primera posicion del array de nombres tiene la criticidad de la primera 
// //   posicion del array de criticidades.
// //   La función "siguientePaciente" debe eliminar y devolver el nombre del siguiente paciente
// //   que hay que atender en urgencias.


// // 1- (Easy) Crear una funcion que dado un array numeros me diga si todos los numeros son mayores que 10
// let largenumArray = [12, 54, 67, 32, 45, 21, 7, 4, 9];
// function biggerthan10(value) {
//     return value > 10;
// }
// console.log(largenumArray.some(biggerthan10));


// // 2 (Easy) Crear una funcion que dado un array numeros me diga si hay alguno mayor que 10
// function biggerthan10(value) {
//     return value > 10;
// }
// console.log(largenumArray.filter(biggerthan10));

// //3 Crear una funcion que dado un array de strings, devuelva un array sin modificar el de entrada, con todos los strings en mayúsculas

// function changetoUpper(value) {
//     return value.toUpperCase();
// }
// console.log(stringArray.map(changetoUpper));

// //  4- Crear una funcion que dado un array de strings, modifique el array con todos los strings en mayúsculas

// function changetoUpper(value, index, arr) {
//     arr[index] = arr[index].toUpperCase()
// }

// stringArray.forEach(changetoUpper);

// console.log(stringArray);

// // 5 Crear una función que dado un array elimine el elemento que se encuentra en la mitad (redondeada hacia abajo)

// let remove =stringArray.splice (3,1);
// Math.floor (stringArray);
// console.log (stringArray);

// Ejercicio 6 Crear una funcion que dado un array de strings, me devuelva los strings de la posicion de la mitad del array, los dos anteriores y los dos siguientes, en un mismo string separados por espacios
//['pizza','fresas','pepino', 'aceituna', 'salmorejo', 'aguacate', 'pan']; 
let middleofArray = stringArray[Math.floor(stringArray.length / 2)]

middleofArray = middleofArray.slice(Math.floor());

console.log (middleofArray.join('-'));

//ejercicio 7 Crear una funcion que dado un array bidimensional de strings, lo convierta a un array unidimensional con todos los strings consegutivos.

let multiDimArray = [[4,1,1],[2,3,3],[4,4,5]];
let oneDimArray = [];

for(let i = 0; i < multiDimArray.length; i++)
{
    oneDimArray = oneDimArray.concat(multiDimArray[i]);
}

console.log(oneDimArray);


