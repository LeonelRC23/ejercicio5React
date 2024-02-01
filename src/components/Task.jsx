import React from 'react';
import { Button } from 'react-bootstrap';

const Task = ({ task }) => {
  return (
    <li className='d-flex justify-content-between my-2'>
      {task}
      <Button className='btn-light'>x</Button>
    </li>
  );
};

export default Task;
