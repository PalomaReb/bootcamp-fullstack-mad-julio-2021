import React from "react";

class ChildCounter extends React.Component {
  //se crea un nuevo componente hijo
  constructor() {
    // hace falta el constructor para hacer el state
    super(); // super es para llamar al constructor de la clase que extendemos
    this.state = {
      // se crea un state porque se va a cambiar el valor durante la ejecución del programa
      count: 0, // darle el valor inicial al contador de 0 (objeto)
    };
  }

  componentDidMount() {
    // Una funcion que se llama cuando el componente se ha montado
    setInterval(() => {
      // para hacer que lo vaya sumando asincronicamente, se hace un setInterval
      this.setState((state) => {
        //hacer un setState porque va a cambiar el estado del counter
        const addCount = state.count + 1; //nueva constante para que se vaya agregando el valor del estado (count) que hay +1
        this.props.onCountUpdate(addCount); //
        return {
          // se regresa...
          count: addCount, // la nueva cuenta del contandor
        };
      });
    }, 1000); //Cada segundo.
  }

  render() {
    return (
      <p>aqui ira el contador hijo {this.state.count} </p> //nodo p contador hijo con el contador y su funcion dada
    );
  }
}

export default ChildCounter;
