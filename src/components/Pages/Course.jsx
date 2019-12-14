import React, {useState} from "react";
import useCourse from "../CustomHooks/useCourse"


const Couse = ({ match }) => {


  const [comment, setComment] = useState("Sin comentarios")
  const state = useCourse(match.params.id);

  const myComment = e => {
    setComment(e.target.value)
  }

  return (
    <div className="ed-grid m-grid-3">
      {state ? (
        <div className="ed-grid">
          <div className="l-block">
            <h1 className="m-cols-3">Curso: {state.titulo}</h1>
            <img className="m-cols-2" src={state.image} alt={state.titulo} />
            <p className="m-cols-2">Profesor: {state.profesor}</p>
          </div>
          <div>
            <h2>Escribe tu comentario</h2>
            <input type="text" placeholder="Escribe..." onChange={myComment.bind(this)}/>
      <p>{comment}</p>
          </div>
        </div>
      ) : (
        <h1>El curso no existe</h1>
      )}
    </div>
  );
};

export default Couse;
