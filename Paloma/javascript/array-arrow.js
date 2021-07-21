/**
 * 1- crear una funcion que reciba dos numeros y devuelva la suma de ellos
 * 2- crear una funcion que reciba un string y devuelva el string en mayusculaç
 * 3- crear una funcion que reciba un string y devuelva los 3 primeros caracteres
 * 4- crear una funcion que reciba un array de numeros y devuelva un array con los que son mayores que 10
 * 5- crear una funcion que reciba un array de strings y devuelva un array con los strings capitalized
 *      ej-> ['gato', 'perro'] -> ['Gato', 'Perro]
 *          ['Gato', 'perro'] -> ['Gato', 'Perro]
 *          ['gAto', 'peRRo'] -> ['Gato', 'Perro]
 */

//ejercicio 1 rear una funcion que reciba dos numeros y devuelva la suma de ellos

let sum = (num1, num2) => num1 + num2;
let first = sum(2, 4);
console.log(first);

//ejercicio 2 crear una funcion que reciba un string y devuelva el string en mayuscula

let newArray = ['pepino', 'fresas', 'alcachofa', 'cafe', 'aguacate'];
let changedNames = newArray.map(newArray => newArray.toUpperCase());
console.log(changedNames);

//ejercicio 3  crear una funcion que reciba un string y devuelva los 3 primeros caracteres

function charStr(value) {
    let result = ' ';
    for (i = 0; i <= 2; i++) {
        result = result + value.charAt(i);
    }
    return result;
}

console.log(charStr('hola'));

// 4- crear una funcion que reciba un array de numeros y devuelva un array con los que son mayores que 10
let largenumArray1 = [23, 65, 1, 62, 5, 78, 11, 43];
function biggerthan10(value) {
    return value > 10;
}
console.log(largenumArray1.filter(biggerthan10));

//5