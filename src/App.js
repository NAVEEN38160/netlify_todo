import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );

  const [newTask, setNewTask] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(tasks));
  }, [tasks]);

  const handleCheck = (id) => {
    const checkedTask = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(checkedTask);
    /* localStorage.setItem("taskList", JSON.stringify(checkedTask)); */
  };

  const handleDelete = (id) => {
    const deletedTask = tasks.filter((task) => task.id !== id);
    setTasks(deletedTask);
    /* localStorage.setItem("taskList", JSON.stringify(deletedTask)); */
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) return;
    addTask(newTask);
    setNewTask("");
  };

  const addTask = (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newAddedTask = { id, checked: false, task };
    const updatedTasks = [...tasks, newAddedTask];
    setTasks(updatedTasks);
    /* localStorage.setItem("taskList", JSON.stringify(updatedTasks)); */
  };

  return (
    <div className="App">
      <Header title="To Do List" />
      <AddItem
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        <Content
          tasks={tasks.filter((task) =>
            task.task.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </main>
      <Footer tasks={tasks} />
    </div>
  );
}

export default App;
