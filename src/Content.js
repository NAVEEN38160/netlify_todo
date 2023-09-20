import React from "react";
import ItemList from "./ItemList";

const Content = ({ tasks, handleCheck, handleDelete }) => {
  return (
    <>
      {tasks.length ? (
        <ItemList
          tasks={tasks}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>No tasks to do</p>
      )}
    </>
  );
};

export default Content;
