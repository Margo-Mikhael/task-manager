import React, { useState } from "react";
import styles from "./AddTaskForm.module.scss";
import Select from "react-select";

export default function AddTaskForm({ onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [tag, setTag] = useState([]);

  const tags = [
    { value: "Design System", label: "Design System" },
    { value: "Feedback", label: "Feedback" },
    { value: "Bug", label: "Bug" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
    }),
    option: () => ({}),
  };

  const handleSubmit = () => {
    const formattedDate = date
      ? (() => {
          let [year, month, day] = date.split("-");
          return `${parseInt(day)}/${parseInt(month)}/${year.slice(-2)}`;
        })()
      : "";

    const newTask = {
      title: title,
      description: description,
      dueDate: formattedDate,
      tags: tag,
      category: "Backlog",
    };

    onSubmit(newTask);
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      {/* Form container */}
      <div
        className={styles.formContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Add New Task</h2>
        {/* Title */}
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Description */}
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {/* Date */}
        <input
          type="date"
          placeholder="Due Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* Tag */}
        <Select
          options={tags}
          onChange={(selectedOptions) => setTag(selectedOptions)}
          isMulti
          styles={customStyles}
        />

        {/* <select value={tag} onChange={(e) => setTag(e.target.value)}>
          <option value="" disabled>
            Select a Tag
          </option>
          <option value="Design System">Design System</option>
          <option value="Feedback">Feedback</option>
          <option value="Bug">Bug</option>
        </select> */}

        {/* Buttons */}
        <div className={styles.buttons}>
          <button onClick={onClose} className={styles.cancelButton}>
            Cancel
          </button>
          <button className={styles.addButton} onClick={handleSubmit}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
