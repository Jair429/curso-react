import React from "react";
// import './App.css';
import "../styles/styles.scss";
// import CursoCard from "./card";
import Form from "./Pages/Form";
import Courses from "./Pages/Courses";
import Course from "./Pages/Course";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainMenu from "./Organisms/MainMenu";
import History from "./Pages/History";
import Home from "./Pages/Home";
import Users from "./Pages/Users";

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cursos/:id" component={Course} />
      <Route path="/cursos" component={Courses} />
      <Route path="/historial/:valor" component={History} />
      <Route path="/historial" component={History} />
      <Route path="/usuarios" component={Users} />
      <Route
        path="/formulario"
        component={() => <Form name="Pagina de contacto" />}
      />
      <Route
        component={() => (
          <div className="ed-grid">
            <h1>Error 404</h1>
            <span>Pagina no encontrada</span>
          </div>
        )}
      />
    </Switch>
  </Router>
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
