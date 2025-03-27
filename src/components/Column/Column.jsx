import React from "react";
import styles from "./Column.module.scss";
import Taskcard from "../Taskcard/Taskcard";

export default function Column({ title, tasks }) {
  return (
    <>
      <div className={styles.columnContainer}>
        <div className={styles.column}>
          {/* Title elements */}
          <div className={styles.columnTitle}>
            <h2>Backlog{title}</h2>

            <div className={styles.columnButtons}>
              <button>
                <i className="fa-solid fa-plus"></i>
              </button>
              <button>
                <i className="fa-solid fa-ellipsis"></i>
              </button>
            </div>
          </div>

          {/* Tasks */}
          <div className={styles.taskList}>
            {tasks?.map((task) => (
              <Taskcard key={task.id} task={task} />
            ))}
          </div>
        </div>

        {/* To do column */}
        <div className={styles.column}>
          {/* Title elements */}
          <div className={styles.columnTitle}>
            <h2>To do{title}</h2>

            <div className={styles.columnButtons}>
              <button>
                <i className="fa-solid fa-plus"></i>
              </button>
              <button>
                <i className="fa-solid fa-ellipsis"></i>
              </button>
            </div>
          </div>

          {/* Tasks */}
          <div className={styles.taskList}>
            {tasks?.map((task) => (
              <Taskcard key={task.id} task={task} />
            ))}
          </div>
        </div>

        {/* In Progress column */}

        <div className={styles.column}>
          {/* Title elements */}
          <div className={styles.columnTitle}>
            <h2>in Progress{title}</h2>

            <div className={styles.columnButtons}>
              <button>
                <i className="fa-solid fa-plus"></i>
              </button>
              <button>
                <i className="fa-solid fa-ellipsis"></i>
              </button>
            </div>
          </div>

          {/* Tasks */}
          <div className={styles.taskList}>
            {tasks?.map((task) => (
              <Taskcard key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
