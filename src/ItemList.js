import React from "react";
import LineItem from "./LineItem";

const ItemList = ({ tasks, handleCheck, handleDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <LineItem
          key={task.id}
          task={task}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
