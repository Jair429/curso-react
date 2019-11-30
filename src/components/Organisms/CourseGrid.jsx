import React from 'react'
import Curso from '../Molecules/card';
import withLoader from '../HOC/withLoader';

const CourseGrid = ({ courses }) => (
  <div className="ed-grid m-grid-4">
    {
      courses.map(c => (
        <Curso
          key={c.id}
          id={c.id}
          title={c.titulo}
          image={c.image}
          price={c.price}
          profesor={c.profesor}
        />
      ))
    }
  </div>
);

export default withLoader('courses')( CourseGrid)