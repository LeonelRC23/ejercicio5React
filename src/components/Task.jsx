import React from 'react';
import { Button } from 'react-bootstrap';

const Task = ({ task }) => {
  return (
    <li className='d-flex justify-content-between'>
      {task}
      <Button className='btn-light'>X</Button>
    </li>
  );
};

export default Task;
