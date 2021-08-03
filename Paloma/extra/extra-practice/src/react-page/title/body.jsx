import React from "react";
import "./style.css";

class Body extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <h1>Tutorial: Introducción a React</h1>
          <p className="greyish">
            Este tutorial no asume ningún conocimiento previo sobre React.
          </p>
          <hr />
        </div>
        <div>
          <h2>Antes de empezar el tutorial</h2>
          <p>
            Vamos a construir un pequeño juego durante este tutorial.
            <b>
              Deberás estar tentado a obviarlo porque tú no estás construyendo
              juegos en el día a día, pero dale una oportunidad.
            </b>
            Las técnicas que aprenderás en el tutorial son fundamentales para
            construir cualquier aplicación de React, y dominarlo te dará un
            entendimiento profundo de React.
          </p>
          <div className="tip-box">
            <h3>Tip</h3>
            <p>
              Este tutorial está diseñado para personas que prefieren
              <b>aprender haciendo.</b> Si tu prefieres aprender los conceptos
              desde el principio, revisa nuestra
              <a
                className="tiplink"
                href="https://es.reactjs.org/docs/hello-world.html"
                title="guía paso a paso"
              >
                guía paso a paso.
              </a>
              Podrías encontrar este tutorial y la guía, complementarias entre
              sí.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
