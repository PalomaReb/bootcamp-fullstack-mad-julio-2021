
//______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________//
// 1- Definir en un comentario un tipo objeto que represente una asignatura. Sus propiedades son (nombre, curso, titulacion, temario, profesor, departamento). Crear una variable y darle valor a una asignatura (inventaros los datos si quereis)
//     * ¿De que tipo de datos es cada una de las propiedades? (escribirlo con un comentario al lado
/**
 * Los tipos de objectos que tendria una asignatura con las propirdades:
 * nombre: string
 * curso : si es "cuarto" puede ser number o string depende como se introduzca
 * titulación: string
 * temario: array -- para hacer un array con varias unidades, se ha hecho un object dentro del array.
 * profesor: string
 * departamento: string
 */

// const Englishclass = {

//     //objeto donde se mete la información de el con sus propiedades
//     nombre: "english", //propiedad con valor string
//     curso: "second bachillerato", //propiedad con valor string
//     titulacion: "grado", //propiedad con valor string
//     temario: [
//         {
//             // array y abre corchete para el primer objeto
//             unidad: 1, //number
//             tema: "Intro to english", //string
//             subtema: [
//                 "where did english come from",
//                 "who speaks english",
//                 "why is it important",
//             ], // lista de strings
//         },
//         {
//             unidad: 2, //number
//             tema: "learning grammar", //string
//             subtema: ["what is an adverb", "what is a noun"], //lista de strings
//         },
//         {
//             unidad: 3, //number
//             tema: "how to write an essay", //string
//             subtema: [
//                 "what is the theme",
//                 "what parts does the essay have",
//                 "who is the essay for",
//             ], //lista de strings
//         },
//     ],
//     profesor: " pepa pig", //string
//     departamento: "english", //string
// };

// //_____________________________________________________________________________________________________________________________________//
// // 2- Tenemos que cambiar la variable para que acepte mas de un profesor. Que tipo de datos es ahora la propiedad profesor?

// /**
//  * para cambiar que la variable de profesor acepte mas de un dato se tendria que cambiar a un objeto dentro de este mismo objeto. ç
//  * Esto se hace de forma similar al objecto anterior solo que se habren corchetes dentro de profesor para crearlo como objeto.
//  */
// const Englishclass = {
//     //objeto donde se mete la información de el con sus propiedades
//     nombre: "english", //propiedad con valor string
//     curso: "second bachillerato", //propiedad con valor string
//     titulacion: "grado", //propiedad con valor string
//     temario: [
//         {
//             // array con objetos dentro
//             unidad: 1, //number
//             tema: "Intro to english", //string
//             subtema: [
//                 "where did english come from",
//                 "who speaks english",
//                 "why is it important",
//             ], // array con strings
//         },
//         {
//             unidad: 2, //number
//             tema: "learning grammar", //string
//             subtema: ["what is an adverb", "what is a noun"], // array con strings
//         },
//         {
//             unidad: 3, //number
//             tema: "how to write an essay", //string
//             subtema: [
//                 "what is the theme",
//                 "what parts does the essay have",
//                 "who is the essay for",
//             ], // array con strings
//         },
//     ],
//     profesor: ["pepa pig"], //string
//     departamento: "english", //string
// };
// //_____________________________________________________________________________________________________________________________________//

// // 3- Ahora tenemos que permitir que cada profesor tenga email y nombre. Cambiar la variable para ello. Que tipo de datos es ahora la propiedad profesor?
// /**
//  * 

//  * dentro de este ejercicio, se esta manteniendo el objeto de los varios profesores creado anteriormente y agregandole valores de name y email dentro de cada uno. 
// *
// *
// * * PARA HACER ESTE EJERCICIOS, SE TIENE QUE DEJAR QUE EL ARRAY DE PROFESORES TENGA COMO NUEVO OBJETO DENTRO LAS PROPIEDADES DE NAME Y EMAIL.
//  */

const Englishclass = {
    //objeto donde se mete la información de el con sus propiedades
    nombre: "English", //propiedad con valor string
    curso: "second bachillerato", //propiedad con valor string
    titulacion: "grado", //propiedad con valor string
    temario: [
        {
            //se abre array con objetos dentro
            unidad: 1, //number
            tema: "Intro to english", //string
            subtema: [
                "where did english come from",
                "who speaks english",
                "why is it important",
            ], // array de strings
        },
        {
            unidad: 2, //number
            tema: "learning grammar", //string
            subtema: ["what is an adverb", "what is a noun"], // array de strings
        },
        {
            unidad: 3, //number
            tema: "how to write an essay", //string
            subtema: [
                "what is the theme",
                "what parts does the essay have",
                "who is the essay for",
            ], // array de strings
        },
    ],
    profesor: [
        {
            name: "Pepa Pig", //string
            email: "pepa@gmail.com", //string
        },
        {
            name: "Pedro Sanchez", //string
            email: "president@es.com", //string
        },
    ],
    departamento: "string", //string
};

// 4- Vamos a pintar un título (h1) en el HTML con el nombre de la asignatura desde JS
const title = document.createElement('h1'); // crear un elemento en para intergarlo en el html
title.textContent = Englishclass.nombre; // darle texto al elemento creado
document.body.appendChild(title); // mostrar en el html

//5 Vamos a pintar el curso (p) de la asignatura
const myDiv = document.createElement('div'); // crear un div para meter las 'p' que se van a crear
const yearofCourse = document.createElement('p'); //Crear una 'p' para meter el curso 
yearofCourse.textContent = Englishclass.curso; //dar texto a la 'p' llamando al objeto y su valor

//6 Tenemos que pintar el primer profesor de la asignatura (nombre(p) email(p)
const nameofTeacher = document.createElement('p'); //crear un parrafo para meter el nombre del profesor
const emailofTeacher = document.createElement('p'); //crear un parrafo para meter el email del profesor
nameofTeacher.textContent = Englishclass.profesor[0].name; // meter nombre de profesor de la posición (0) en la p creada
emailofTeacher.textContent = Englishclass.profesor[0].email; // meter nombre de profesor de la posición (0) en la p creada

// 7- Tenemos que pintar todos los profesores de la asignatura
const unorderedList = document.createElement('ul'); //crear una lista desordenada

// Englishclass.profesor.forEach((element, index) => {
Englishclass.profesor.forEach(function (element, index) { //hacer un forEach para que recorra el array
    const listofTeachers = document.createElement('li'); // crear una lista dentro de la function para que se cree un elemento nuevo se añdade a su li
    listofTeachers.textContent = element.name; //crear el texto para la lista de teachers
    listofTeachers.id = index;// dar ID a cada elemento para saber su posición en el array
    unorderedList.appendChild(listofTeachers); //append child para que se sume a la UL
});


// 8- Añadir la nota como propiedad al tipo de la asignatura

Englishclass.mark = 4.9; // propiedad añadidad a asignatura
// console.log(Englishclass.mark);

// 9- Crear una funcion que imprima por pantalla la nota de una asignatura que reciba

function printMark(objectoAsigntura) { // function creada para que imprima la nota de la asignatura
    console.log(objectoAsigntura.mark); // console log para ver que si se esta agregando la nota
    return objectoAsigntura.mark; //return la nota agregada para poder imprimir en el html
}
const markofClass = document.createElement('p'); //crear un 'p' para agregar la nota creada
markofClass.textContent = 'La nota es: ' + printMark(Englishclass); //dar text a la nota para que se enseñe por html 


// 10- Crear una funcion que devuelva "SUSPENSO" si la nota de la asignatura que reciba es menor que 5

function sendFailed(yourmark) { // function creada para comprobar nota de asignatura si esta suspenso o no

    if (yourmark < 5) { // si la nota es menor que 5, false = suspenso
        return false;
    }
    else {
        return true; // si es major =
    }
}

// 11- Crear una función que pinte en el HTML "SUSPENSO" o "APROBADO" si la asignatura está suspensa o no

function printresult(grade) { // function para que imprima en html si esta aprobado o no
    if (grade === true) { // si nota es cierto, 
        return 'APROBADO...listillo'; //estaria aprobado (por la comprobacion anterior)
    }
    else {
        return 'SUSPENSO...tontaino'; // si es falso, estaria suspenso
    }
}
markofClass.textContent += ' (' + printresult(sendFailed(Englishclass.mark)) + ')'; //concatenar la 'p' que habia anterior con el return de la function

myDiv.appendChild(yearofCourse);
myDiv.appendChild(nameofTeacher);
myDiv.appendChild(emailofTeacher);
myDiv.appendChild(unorderedList)
myDiv.appendChild(markofClass);
document.body.appendChild(myDiv);
