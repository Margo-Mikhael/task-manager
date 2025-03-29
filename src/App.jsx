import React, { useState } from "react";
import Header from "./components/Header/Header";
import Column from "./components/Column/Column";
import Taskcard from "./components/Taskcard/Taskcard";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  return (
    <>
      <Header addTask={addTask} />
      <Column tasks={tasks} />
    </>
  );
}
