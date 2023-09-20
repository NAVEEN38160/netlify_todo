import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ task, handleCheck, handleDelete }) => {
  return (
    <li className="task">
      <input
        type="checkbox"
        checked={task.checked}
        onChange={() => handleCheck(task.id)}
      />
      <label
        onDoubleClick={() => handleCheck(task.id)}
        style={task.checked ? { textDecoration: "line-through" } : null}
      >
        {task.task}
      </label>
      <FaTrashAlt onClick={() => handleDelete(task.id)} />
    </li>
  );
};

export default LineItem;
