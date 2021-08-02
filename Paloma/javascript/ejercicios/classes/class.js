/**
 * let a = {
 * name: Alex //atributos o propiedades con el valor que representa => variables
 * surname: Gonzalez 
 * walk : function()} // metdoso o acciones que pueden realizar esa entidad
 * // representa a alex dentro del mundo/entidad de las personas.
 * 
 * let b = {
 * name: matias
 * surname: Lallave
 * walk: function { // metodos o acciones que puede realizar una entidad 
 * }}
 * 
 * 
 * clase = es una definición de una entidad/concepto 
 * // las clases siempre se empiezan por mayusculas
 *          coche: --- esto, se le llama clase
 * ** propiedades de un coche**
 *            - numero de ruedas
 *            - matricula
 *            - color
 *            - marca
 *            - combustilble
 *            - kilometros
 *            - potencia
 *            - modelo  
 * **Acciones que puedo hacer con un coche**
 *            - arrancar
 *            - frenar
 *            - acelerar
 *            - colisionar 
 *            - girar
 *            - derrapar
 *            - matricular
 *            - estacionar
 * 
 * 
 * -- objeto - un individuo concreto de una clase (instancia)
 *      ferrari: // esto ya es un ferrari real, unico 
 *          - numRuedas: 4
 *          - color: rojo 
 *          - modelo: testarrosa
 *          - matricula: 82741hh
 * 
 * 
 * ferrari.arrancar ();
 * 
 * - Como lo codifico?
 *  - clases:
 *      1. poner palabra reservada "class" y el nombre de la clase
 * 
 *  class <nombre de clase> {
 * 
 * 
 * 
 * } 
 * class Coche { esto es una definición de todos los coches -- crear una clase es encapsular su funcionalidad
 * ---------------------------------------
 * -----------------------Definición de las propiedades---------------------------------------
 * 
 * constructor ()
 *      todas las clases tiene una function especial que se llama constructor. - 
 *      se ejecuta cada vez que cree un objeto de esta clase. 
 *      sirve para inicializar las propiedades / atributos. 
 *      this.<nombredepropiedad> = <valor>;
 *      this.numRuedas = 4;
 *      this.color = color;
 *      this.modelo = modelo;
 *      this.matricula = null;
 * 
 * 
 * -----------------------Definicion de los metodos //Acciones -------------------------------
 * 
 *          arrancar (){
 *          codigo de arrancar}
 * 
 *      matricular (matricula) { // guardar el valor de la matricula// esto seria un set.
 *  this.matricula = matricula}
 * 
 * }
 * 
 * 
 * Hay que crear un Objeto ( una isntancia de la clase)
 * 
 *          let/const ferrariTestarrosa =  new Coche ('Testarrosa', 'rojo'); // crea una ferrari testarrosa rojo 
 *          
 *              ferrariTestarrosa.matricular ('82741hh'); //ABSTRACCION
 *  Ya tenemos un ferrari testarrosa roko con matricula 82741hh
 * 
 * el estado del objeto se va cambiando segun se vaya usando y pasando el codigo. 
 *  GETTERS AND SETTERS: 
 * getNumRuedas(){
 * return this.numRuedas}
 * 
 * 
 *
 * *****HERENCIA - recibir propiedades o acciones de un padre/madre
 * 
 *          clase Moto {
 * 
 *          numRuedas:2
 *          color:
 *          matricula: }
 * 
 * 
 *  clase Vehiculo { // Definicion de vehiculo
 *      constructor(color, modelo, numRuedas ){
 *      this.color = color;
 *      this.modelo = modelo;
 *      this.numRuedas = numRuedas;
 * }
 * }
 * 
 * let myVehiculo = new Vehiculo ('verde', 'testarrosa' 4);
 * 
 * 
 * clase Coche extends Vehiculo{
 * 
 * constructor (color, modelo){
 * super (color, modelo, 4); // invocamos al constructor de la clase que heredamos. 
 * // super tiene que ser la primera linea del constructor hijo. 
 * // le tenemos que pasar al constructor padre los parametros que nos pida. 
 * }
 * 
 * }
 * 
 * 
 * let ferrariTest = new Coche ('verde', 'testarrosa');
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

//  3- Crear una clase animal que represente un animal. El gato y el perro deberá heredar de animal
//  4- Crear una clase pollito que represente un pollito
//  5- Crear un objeto de cada clase e imprimir el sonido que haceç


//  1- Crear una clase que represente un perro (nombre, edad, numero de patas, color, hacerSonido())

/**
 * 
 * 
    class Dog {
    constructor(name, age, numberofLegs, color) {
        this.name = name;
        this.age = age;
        this.numberofLegs = numberofLegs;
        this.color = color;
    }
    makesNoise() {
        console.log('woof');
 * 
 * 
 */

//  2- Crear una clase que represente un gato (nombre, edad, numero de patas, color, hacerSonido())
// class Cat {
//     constructor(name, age, numberofLegs, color) {
//         this.name = name;
//         this.age = age;
//         this.numberofLegs = numberofLegs;
//         this.color = color;
//     }
//     makesNoise() {
//         console.log('mepw');

//  3- Crear una clase animal que represente un animal. El gato y el perro deberá heredar de animal
class Animal {
    constructor(name, age, numberofLegs, color, makesNoise) {
        this.name = name;
        this.age = age;
        this.numberofLegs = numberofLegs;
        this.color = color;
    }
    makesNoise() {
        console.log('noise of animal');
    }
}

class Dog extends Animal {
    constructor(name, age, numberofLegs, color) {
        super(name, age, 4, color);
    }
    makesNoise() {
        console.log('woof');
    }
}


class Cat extends Animal {
    constructor(name, age, numberofLegs, color) {
        super(name, age, 4, color);
    }
    makesNoise() {
        console.log('meow');
    }
}


//  4- Crear una clase pollito que represente un pollito
class Chick extends Animal {
    constructor(name, age, color) {
        super(name, age, 2, color);
    }
    makesNoise() {
        console.log('peep peep');
    }
}

//  5- Crear un objeto de cada clase e imprimir el sonido que hace

let fufi = new Dog('fufi', 2, 'black');
fufi.makesNoise();
let catFluff = new Cat('fluffy', 2, 'orange');
catFluff.makesNoise();
let bird = new Chick('chicky', 2, 'yellow');
bird.makesNoise();