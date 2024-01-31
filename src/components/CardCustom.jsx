import React, { useState } from "react";
import "../styles/cardCustom.css";
import Task from "./Task";

const CardCustom = () => {
  const [tarea, setTarea] = useState([]);
  const onKeyEnter = (e) => {
    if (e.key == "Enter") {
      if (e.target.value.trim().length !== 0) {
        setTarea([...tarea, e.target.value]);
      } else {
        alert("Ingrese una tarea.")
      }
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="content p-5">
        <div className="text-center">
          <h1 className="fs-1">Bienvenido</h1>
          <h3 className="fs-5">Ingresa tus tareas</h3>
          <input type="text" placeholder="Tarea 1..." onKeyDown={onKeyEnter} />
        </div>
        <div>
          <ul>
            {tarea.map((t, p) => (
              <Task task={t} key={p} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardCustom;
