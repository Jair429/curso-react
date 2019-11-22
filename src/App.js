import React from "react";
// import './App.css';
import "./styles/styles.scss";
// import Curso from "./card";
import Banner from "./banner"
// import Formulario from "./formulario"
import CourseGrid from "./CourseGrid"

const App = () => (
  <>
    <Banner />
    {/* <Formulario name='EDteam'/> */}
    <CourseGrid />
  </>
);

export default App;

// Reglas JSX
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver UN sólo elemento padre
// 3: Apoyarse de los Fragment cuando necesito devolver 2 elementos
// 4: Fragment => <> hijos </>
// 5: img siempre se cierra
// 6: class => className
// 7: for => htmlFor
