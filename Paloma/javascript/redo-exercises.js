//DIA 1
//1 Crear dos variables numéricas y realizar su suma, resta multiplicación y division
let num1 = 66;
let num2 = 34;
let resultadd = num1 + num2;
let resultsub = num1 - num2;
let resultmult = num1 * num2;
let resultdiv = num1 / num2;
console.log(resultadd);
console.log(resultsub);
console.log(resultmult);
console.log(resultdiv);


//2 Crear dos variables string y concatenarlas
let string1 = 'Re-doing varaibles to understand Javascript';
let string2 = ' I hope this works.'
let newstring = string1 + string2;
console.log(newstring);
// 3 Imprimir la longitud del string resultante del ejercicio anterior
console.log(newstring.length);

//4 Ejercicio que guarde en una variable los grados Celsius (X) e imprima por pantalla sus correspondientes grados Farenheit "X ºC son YºF"
let celcius = 12;
let farenheit = (celcius * 9 / 5) + 32;
console.log(celcius + ' is ' + farenheit + ' farenheit.');

//5 Imprimir por consola 'true' o 'false' si una variable número está entre 10 y 100

console.log((num1 > 10) && (num1 < 100));

//6 Con el ejercicio de la calculadora de grados celsius, imprimir si una variable en ºC temperatura esta es mayor de 87 ºF

let higherthan = (celcius * 9 / 5) + 32 > 87;
console.log('this temperature is higher than 87 farenheit : ' + higherthan);

//EJERCICIOS TARDE DIA 1:

//Ejercicio 1 - Crear una variable numerica y proporcionarle un valor. imprimir por pantalla si es par o impar

console.log(num1 % 2 === 0); // si sale par, marca true, si sale impar marca false. 

//Ejercicio 2- Crear una variable que represente el numero de hijos e indicar por pantalla si es familia numerosa o no
let numOfChildren = 1;
console.log((numOfChildren > 2) && (numOfChildren <= 4)); // familia numerosa simple en españa < 4 hijos entonces si es mas, marca como false.

//ejercicio 3 Crear dos variables que representen el peso y la altura e indicar por pantalla si esa persona tiene "Obesidad de clase II" o no según la OMS
let height = 1.65;
let weight = 56.5;
let bmi = weight / height ** 2;
console.log(('Is a person with ' + bmi + ' obese? ' + (bmi >= 30 && bmi <= 35)));

//ejercicio 4
// - Crear Una variable que represente el saldo de tu cuenta. Crear 4 variables numéricas que cada una represente un item de tu cesta (ej: tomates, pescado, etc) de la compra y dales un precio. Imprimir por pantalla si tienes saldo suficiente o no para pagar la compra.
let myBalance = 56;
let cola = 6.75;
let chicken = 5.43;
let pasta = 2;
let sausage = 4.56;
let total = cola + chicken + pasta + sausage;
console.log('Can I buy my groceries if I have ' + myBalance + ' euros?:   ' + (total < myBalance));

// - Crear un variable que represente tus ingresos brutos en el año. Imprimir por pantalla cuánto vas a cobrar al mes (incluyendo el símbolo del euro)  y cuantos impuestos vas a pagar al mes según la legislación actual española suponiendo que eres soltero, sin hijos, menor de 30 años, quieres cobrar en 12 pagas, tu tipo de contrato laboral es general y tu categoria profesional es Ingenieros y Licenciados.(estas condiciones no son booleanos que haya que representar sino es para simplificar el ejercicio, ya que no hemos dado sentencias condicionales)
let anualSal = 54000;


// Para recibir una beca hay una serie de condiciones
// El alumno tiene que haber aprobado mas 80% de las asignaturas.
// La nota media de todas las notas tiene que ser superior o igual a 6.5
// Crea un programa que escriba en variables las diferentes notas de al menos 8 asignaturas e imprima por pantalla si esa persona recibiría beca o no
let math = 7;
let biology = 5;
let art = 5;
let music = 7;
let history = 8;
let pe = 8;
let english = 7;
let spanish = 7;

const mathpassed = 7 >= 5;
const biologypassed = 5 >= 5;
const artpassed = 5 >= 5;
const musicpassed = 7 >= 5;
const historypassed = 8 >= 5;
const pepassed = 8 >= 5;
const englishpassed = 7 >= 5;
const spanishpassed = 7 >= 5;

let allSubjectsPassed = (mathpassed, biologypassed, artpassed, musicpassed, historypassed, pepassed, englishpassed, spanishpassed)
let scholarshipstudent = (math + biology + art + music + history + pe + english + spanish) / 8;
let scholarshipaveragesRequired = 6.5;
console.log((scholarshipstudent > scholarshipaveragesRequired) && (allSubjectsPassed))


//DIA 2 EJERCICIOS MAÑANA
/**
 * Una carretera tiene como limite de velocidad 90Km/h
 * En funcion de la contaminación que haya se reduce la velocidad a 70km/h
 * Si la contaminación es superior a 65%
 * Construir una aplicación que me diga a que velocidad tengo que ir por la 
 * carretera en funcion de la contaminación
 * 
 */
const pollutionNum = 32;

if (pollutionNum <= 65) {
    console.log('You are allowed to go 90');
}
else {
    console.log('You are only allowed to go 70');
}

/*
* Un semáforo puede estar verde, ambar fijo, ambar intermitente o rojo
* Construir una aplicación que me indique si puedo pasar o no por el semaforo
* PD: Supuestamente Ambar Fijo deberías frenar y no pasar.
* PD: Supuestamente Ambar Intermitente podrías pasar
*/

let light = 'purple';

if ((light === 'green') || (light === 'blinkingYellow')) {
    console.log(' You can pass')
}
else if ((light === 'red') || (light === 'yellow')) {
    console.log(' You MUST stop');
}
else {
    console.log('Go home, the light is broken')
};

/*
* Construir una aplicación que a partir de la nota de una asignatura me diga si 
* la asignatura está 
* SUSPENSA (<5), 
* APROBADA(5-<7), 
* NOTABLE(7-<9), 
* SOBRESALIENTE(9-<10)
* MATRICULA DE HONOR (10)
*/

let yourMark = 10;

if (yourMark < 5) {
    console.log('You have failed');
}
else if
    ((yourMark >= 5) && (yourMark <= 7)) {
    console.log('You passed but not well');
}
else if
    ((yourMark >= 7) && (yourMark <= 9)) {
    console.log('You passed well');
}
else if
    ((yourMark >= 9)&&(yourMark <10)){
        console.log ('You passed very well');
    }
    else if
    (yourMark === 10){
        console.log ('you hve recieved honors');
    };


// Ejercicio que calcule el valor de la sucesión de fibonacci de una variable. Implementar la solución con un while (Hard)

//DIA 2 TARDE

//Ejercicio 1 - Escribir un programa que dado dos números imprima el mayor de ellos
num1 
num2
if (num1 < num2) {
    console.log (num2);
}
else if (num1 === num2){

    console.log ('they are the same');
}
else {
    console.log (num1);
};

//ejercicio 2 Escribir un programa que recorra los enteros de una variable dada y vaya imprimendo por pantalla si esos son pares o impares

 for (i=1; i<=num2; i++) {
     if (i%2 ===0 ) {
         console.log ( i + 'even');
     }
     else {
         console.log (i+ 'odd');
     }
 };

//ejercicio 3  Escribe un programa que recorra los números del 1-100 e imprima por pantalla: (Medium)
//          Fizz, si es multiplo de 3
//          Buzz, si es múltiplo de 5
//          FizzBuzz, si es múltiplo de 3 y 5 a la vez

let ex3 =100;
for (i=1; i <= ex3; i++){
    if (i%3 ===0) {
        console.log ('fizz');
    }
    if (i%5===0){
        console.log ('buzz');
    }
    if ((i%3 === 0 && i%5 ===0)){ 
        console.log ('fizzbuzz');
}
}
//// Escriba por pantalla un programa que pinte el siguiente patrón: (Hard)
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  
// * * * *  
// * * * 
// * *
// *

let star = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        star += "* ";
    }
    star += "\n";
}
for (let v = 0; v < 5; v++) {
    for (let s = 4; s > v; s--) {
        star += "* ";
    }
    star += "\n";
}
console.log(star);

// //- Escribir una función que dado un numero, devuelva el número al revés (EJ: 3456 => 6543) (Medium)
// - Crear una funcion que dado un NIF o un NIE te indique si es válido o no. En la página del ministerio se explica como se valida (http://www.interior.gob.es/web/servicios-al-ciudadano/dni/calculo-del-digito-de-control-del-nif-nie) (Hard)

//ejercicio 1
// - Escribir una función que devuelva el tipo del parámetro de entrada (Easy)


//ejercicio // - Crear las funciones que simulen una calculadora (Suma, Resta, multiplicaciones, divisiones y porcentajes) (Easy)
function add(a,b){
    return a+b;
}
function minus(a,b){
    return a-b;
}
function times(a,b){
    return a*b;
}
function divide (a,b){
    return a/b;
}
function rest(a,b){
    return a%b;
}

//ejercicio  Crear una función que dado una URL (Se representa con un string) me diga o no si pertenece al dominio de github. (Medium)

function realURL(value) {
    const url = 'linkedin.com';
    if (value.indexOf(url) != -1){
        return true;
    }
    else {
        return 'this is not the correct url sorry'
    }
}
console.log(realURL('google.com'));

//ejercicio // - Crear una función calculadora que reciba como parametros: Dos operandos y la función que se quiera utilizar para calcular. (Hard)

// function calc(a,b,operation){ //usando las functions de operadores de antes y solo es llamar la function cuando se quiera X operador.
//  return operation (a,b);
//  }
// console.log (calc(3,4 add()));

//

function areaTriangle(height, base) {
    let area = (height * base) / 2;
    return area;
}
function perimetreTriangle(side1, side2, side3) {
    let perimetre = side1 + side2 + side3;
    return perimetre;
}
function areaSquare(sideSquare) {
    let area2 = sideSquare ** 2;
    return area2;
}
function perimetreSquare(sideSquare1) {
    let perimetreSquare = sideSquare1 * 4;
    return perimetreSquare;
}
function areaCircle(radius) {
    let areacircle1 = Math.PI * radius ** 2;
    return areaCircle;
}
function areaRectangle(base2, height2) {
    let areaRectangle = base2 * height2;
    return areaRectangle;
}
function perimetreRectangle(base2, base3, height2, height3) {
    let areaRectangle = base2 + base3 + height2 + height3;
    return perimetreRectangle;
}

// //1 .Escribe una función que dado un número y un array, devuelva la posición donde se encuentra el número o -1 si no lo encuentra (Easy)
let anArray = [4,7,9,8,1,4,2,3,20,32,65];
let otherArray = anArray.indexOf(1);
console.log (otherArray);

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

let maxnum = 10;
for (i=0; i<=maxnum ;i++){
    let squarething =' '
    for (j=0; j<=maxnum; j++){
        squarething += ' - ';
    }
    console.log (squarething)
}

// 3. Escribe una función que dado un array bidimensional, devuelva un array con los valores de la diagonal (Medium)

let array2 = [[2, 4, 5], [8, 7, 3], [1, 4, 2]]; //solution only works for cubes.
function diagonalArray(bidimensionalArray) {
    let result = [];
    for (let i = 0; i < bidimensionalArray.length; i++) {
        for (let j = 0; j < bidimensionalArray[i].length; j++) {
            if (i === j) {
                result.push(bidimensionalArray[i][j]);
                // console.log(bidimensionalArray[i][j]);
            }
        }
    }
    return result;
}
console.log(diagonalArray(array2));

// 4. Escribe una función que dado un array de números, lo devuelva ordenado (Hard)
function ordermyArray (a,b){
    return a - b;
}
console.log (anArray.sort(ordermyArray));

// 5. Juego Sopa de letras (Legend):
//     **Escribe una función que dado un array de palabras, devuelva un array bidimensional de caracteres en la que las letras de una palabra se encuentren seguidas (diagonal, vertical u horizontal)
//     **Escribe una función que dado un array bidimensional de caracteres y un string, te diga si el string se encuentra o no en el array de letras (diagonal, vertical u horizontal)"

// 1- (Easy) Crear una funcion que dado un array numeros me diga si todos los numeros son mayores que 10

function allBiggerthan10 (value){
    return value >10;
}
console.log (anArray.every(allBiggerthan10));

// 2- (Easy) Crear una funcion que dado un array numeros me diga si hay alguno mayor que 10

function mostbiggerthan10 (value){
    return value >10;}

console.log (anArray.filter (mostbiggerthan10));

// 3- (Easy) Crear una funcion que dado un array de strings, devuelva un array sin modificar el de entrada, con todos los strings en mayúsculasç

let stringArray1 = ['fiestas', 'felices', 'capitolize'];
function changetoUpper(value) {
     return value.toUpperCase();
    }
    console.log(stringArray1.map(changetoUpper))
// 4- (Easy) Crear una funcion que dado un array de strings, modifique el array con todos los strings en mayúsculas
function changetoUpper(value) {
    return value.toUpperCase();
   }
   console.log(stringArray1.filter(changetoUpper))
// 5- (Easy) Crear una función que dado un array elimine el elemento que se encuentra en la mitad (redondeada hacia abajo)
// 6- (Medium) Crear una funcion que dado un array de strings, me devuelva los strings de la posicion de la mitad del array, los dos anteriores y los dos siguientes, en un mismo string separados por espacios
// 7- (Medium) Crear una funcion que dado un array bidimensional de strings, lo convierta a un array unidimensional con todos los strings consegutivos.
//    EJ: [['a','b'], ['c','d']] => ['a','b','c','d']
// 8- (Hard)Cuando vamos a urgencias, nos atienden en recepción y nos asignan un orden para ser atendido.
//   Este orden va en funcion de dos factores:
//      1.- Orden de llegada a urgencias
//      2.- Criticidad de la urgencia
//   Construir una función "siguientePaciente" que dados dos arrays de la misma longitud
//    - EL primer array es el de los nombres de los pacientes en orden de llegada
//    - El segundo array representa la criticidad asociada a cada paciente
//   El array de criticidad está asociado con el array de nombres por su posicion de forma que:
//   El paciente en la primera posicion del array de nombres tiene la criticidad de la primera 
//   posicion del array de criticidades.
//   La función "siguientePaciente" debe eliminar y devolver el nombre del siguiente paciente
//   que hay que atender en urgencias.