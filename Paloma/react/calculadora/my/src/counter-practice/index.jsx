import React from "react"; // importar react para poder usarlo
import ChildCounter from "../childCounter"; //llama al hijo para poder usarlo

class ParentCounter extends React.Component {
  //crear un componente padre donde iran todos los hijos necesarios
  constructor() {
    // se hace un constructor porque hace falta un state
    super(); //super es para llamar al constructor de la clase que extendemos
    this.state = {
      //state porque se va a cambiar el valor durante la ejecución
      childCounter: 0, // se empieza el contador del padre a 0 que se ira sumando con el hijo
    };
  }

  render() {
    // aqui va lo que se tiene que ver
    return (
      // aqui va todo el HTML + js
      <div>
        <p>
          Informacion del hijo intervalo (aqui se demuestra al hijo):{" "}
          {this.state.childIntervalCount}
        </p>
        <ChildCounter
          onCountUpdate={(newCount) =>
            this.setState({ childIntervalCount: newCount })
          } //HELPPPPPPP
        ></ChildCounter>
      </div>
    );
  }
}

export default ParentCounter; // exportar el padre para poder usarlo
