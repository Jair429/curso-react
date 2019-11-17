import React, {Fragment} from 'react';
// import './App.css';
import "./styles/styles.scss"
import Curso from './card';

const App = () => (
  <Fragment>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://images.pexels.com/photos/771881/pexels-photo-771881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="imagen de newyork" />
            <div className="main-banner__data s-center">
              <p className="t2 s-mb-0">Título del banner</p>
              <p> Subtítulo del banner</p>
              <a href="/" className="button">Botón del banner</a>
            </div>
          </div>
        </div>
      </div>

    <div className="ed-grid m-grid-4">
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
    </div>
  </Fragment>
)

export default App;

// Reglas JSX
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver UN sólo elemento padre
// 3: Apoyarse de los Fragment cuando necesito devolver 2 elementos
// 4: Fragment => <> hijos </>
// 5: img siempre se cierra
// 6: class => className
// 7: for => htmlFor