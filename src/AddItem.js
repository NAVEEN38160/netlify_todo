import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newTask, setNewTask, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add a new task.."
        autoFocus
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
