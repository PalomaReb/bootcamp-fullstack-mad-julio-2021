// 1. Escribe una función que dado un número y un array, te devuelva la posición donde se encuentra el número o -1 si no lo encuentra (Easy)
// 2. Escribe una función que pinte el siguiente patrón por consola (Easy):
// - - - - - - - - - -                                                                                           
// - - - - - - - - - -                                                                                           
// - - - - - - - - - -                                                                                           
// - - - - - - - - - -                                                                                           
// - - - - - - - - - -                                                                                           
// - - - - - - - - - -                                                                                           
// - - - - - - - - - -                                                                                           
// - - - - - - - - - -                                                                                           
// - - - - - - - - - -                                                                                           
// - - - - - - - - - - 
// 3. Escribe una función que dado un array bidimensional, devuelva un array con los valores de la diagonal (Medium)
// 4. Escribe una función que dado un array de números, lo devuelva ordenado (Hard)

//ejercicio 1:
let positionArray = [3,2,6,5,8,1];
let newPosition = positionArray.indexOf(7);
console.log (newPosition);

//ejercicio 2:
let hyphen = 10;
for (let i=0; i<=hyphen; i++){
    let dash = " ";
    for ( let j =0; j<=hyphen; j++){
        dash += '-';

    }
    console.log (dash);
}

//ejercicio 3


// ejercicio 4

function orderArray (a,b){
    return a - b;
}
console.log (positionArray.sort(orderArray));
