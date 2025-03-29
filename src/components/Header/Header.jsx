import React, { useState } from "react";
import styles from "./Header.module.scss";
import AddTaskForm from "../AddTaskForm/AddTaskForm";

export default function Header({ addTask }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerText}>
        <nav className={styles.nav}>
          <span>Projects</span>&gt;
          <span>International</span>&gt;
          <span className={styles.selectedNav}>Product Web</span>
        </nav>
        <h1>My Tasks</h1>
      </div>

      <div className={styles.buttons}>
        <button>
          <i className="fa-solid fa-gear"></i>
        </button>
        <button>
          <i className="fa-solid fa-ellipsis"></i>
        </button>
        <button
          className={styles.taskButton}
          onClick={() => setIsFormOpen(true)}
        >
          <i className="fa-solid fa-plus"></i> New Task
        </button>
      </div>

      {isFormOpen && (
        <AddTaskForm onClose={() => setIsFormOpen(false)} onSubmit={addTask} />
      )}
    </header>
  );
}
