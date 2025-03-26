import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerText}>
        <nav className={styles.nav}>
          <span>Projects</span>&gt;
          <span>International</span>&gt;
          <span>Product Web</span>
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
        <button className={styles.taskButton}>
          <i className="fa-solid fa-plus"></i>New Task
        </button>
      </div>
    </header>
  );
}
