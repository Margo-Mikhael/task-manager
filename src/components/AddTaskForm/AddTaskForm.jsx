import React, { useState } from "react";
import styles from "./AddTaskForm.module.scss";

export default function AddTaskForm({ onClose }) {
  const [category, setCategory] = useState("Backlog"); // Default category
  const [tag, setTag] = useState("Design System"); // Default tag
  const [date, setDate] = useState(""); // State for the date input

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.formContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Add New Task</h2>

        {/* Title */}
        <input type="text" placeholder="Task Title" />

        {/* Description */}
        <textarea placeholder="Task Description"></textarea>

        {/* Date */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Due Date"
        />
        {/* Tag */}
        <select value={tag} onChange={(e) => setTag(e.target.value)}>
          <option value="Design System">Design System</option>
          <option value="Feedback">Feedback</option>
          <option value="Bug">Bug</option>
        </select>
        {/* Buttons */}
        <div className={styles.buttons}>
          <button onClick={onClose} className={styles.cancelButton}>
            Cancel
          </button>
          <button className={styles.addButton}>Add Task</button>
        </div>
      </div>
    </div>
  );
}
