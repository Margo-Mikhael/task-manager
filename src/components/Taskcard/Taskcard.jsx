import React from "react";
import styles from "./Taskcard.module.scss";

export default function Taskcard({ task }) {
  return (
    <div className={styles.taskCard}>
      {/* Tag */}
      <span className={styles.tag}>{task.tag}</span>

      {/* Title */}
      <h3 className={styles.title}>{task.title}</h3>

      {/* Description */}
      <p className={styles.description}>{task.description}</p>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.meta}>
          <span className={styles.date}>{task.date}</span>
          <span className={styles.id}>D-{task.id}</span>
        </div>
        <div className={styles.actions}>
          <i className="fa-solid fa-flag"></i>
          <span>12 comments</span>
          <span>0 files</span>
        </div>
      </div>
    </div>
  );
}
