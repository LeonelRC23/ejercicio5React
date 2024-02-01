import React from 'react';
import { Button } from 'react-bootstrap';

const Task = ({ task }) => {
  let deletElement = (e) => {
    //como actualizo el componente para que borre la tarea seleccionada
  }
  return (
    <li className='d-flex justify-content-between my-2'>
      {task}
      <Button className='btn-light' onClick={deletElement}>x</Button>
    </li>
  );
};

export default Task;
