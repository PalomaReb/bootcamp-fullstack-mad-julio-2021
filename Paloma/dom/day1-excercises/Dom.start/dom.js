// let paragraph = document.querySelectorAll('p');
// console.log(paragraph[2]);

// // // Haciendolo con una funcion
// // function colorChangebyevenorOdd(e, i) {
// //     if (i % 2 === 0) {
// //         paragraph[i].style.color = 'blue';
// //     }
// //     else {
// //         paragraph[i].style.color = 'red';
// //     }
// // }

// // paragraph.forEach (colorChangebyevenorOdd);

// // hacindolo con arrow function
// paragraph.forEach((e, i) => {
//     if (i % 2 === 0) {
//         paragraph[i].style.color = 'blue';
//     }
//     else {
//         paragraph[i].style.color = 'red';
//     }
// });


// // otro ejemplo (operador ternario)...... paragraph[i].style.color = i%2===0 ? 'blue':'red'; // esto es un operador ternario, donde si es la misma variable, solo se tiene que escribir una vez. cuando se cumple la condicion, se hace el primero y el else seria el segundo. 


// // for (let i=0; i <paragraph.length; i++) {
// //     if (i%2===0) {
// //         paragraph[i].style.color ='blue';
// //     }
// //     else {
// //         paragraph[i].style.color ='red';
// //     }
// // }
// // paragraph[0].style.color = 'blue';
// // paragraph[1].style.color = 'red';
// // paragraph[2].style.color = 'blue';
// // paragraph[3].style.color = 'red';

// // document.createElement ('p'); esto es para crear un nuevo elemento. 
// // esto se mete en una variable === 

// // let newparagraph = document.createElement ('p');
// // newparagraph.textContent = 'This is a new paragraph';

// // then you need to add element to DOM
// //1. get the element parent -- document.getElementbyId (o by lo que necesites) ('que id usas); y asi le dices a donde quieres que lo meta. 
// //2. para añadir dijo, se usa appendChild (newparagraph);

let newDiv = document.createElement('div');
let paragraph = document.createElement('p');
paragraph.textContent = 'lo que sea';
let newLink = document.createElement('a');
newLink.textContent = 'google';
newLink.target = '_blank';

newLink.href = 'https://www.google.com/';
let newList = document.createElement('ul');
let newLI1 = document.createElement('li');
let newLI2 = document.createElement('li');
let newLI3 = document.createElement('li');

newList.textContent = 'This is a car list';
newLI1.textContent = 'Seat';
newLI2.textContent = 'Ford';
newLI3.textContent = 'Citroen';

document.body.appendChild(newDiv);
newDiv.appendChild(paragraph);
newDiv.appendChild(newLink);
newDiv.appendChild(newList);
newDiv.appendChild(newLI1);
newDiv.appendChild(newLI2);
newDiv.appendChild(newLI3);
















