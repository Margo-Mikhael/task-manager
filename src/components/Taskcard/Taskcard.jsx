import React, { useState } from "react";
import styles from "./Taskcard.module.scss";
import avatar1 from "../../assets/avatar.svg";
import avatar2 from "../../assets/avatar2.svg";
import folder from "../../assets/folder.svg";
import comments from "../../assets/message.svg";
import flag from "../../assets/flag.svg";
import flagclicked from "../../assets/clickedflag.svg";

export default function Taskcard({ task }) {
  const [isClicked, setIsClicked] = useState(false);

  const getTagClass = (tagValue) => {
    switch (tagValue) {
      case "Design System":
        return styles.designSystem;
      case "Feedback":
        return styles.feedback;
      case "Bug":
        return styles.bug;
      default:
        return "";
    }
  };

  return (
    <div className={styles.taskCard}>
      {/* Tags */}
      <div className={styles.tagsContainer}>
        {task.tags &&
          task.tags.map((tag, index) => (
            <span
              key={index}
              className={`${styles.tag} ${getTagClass(tag.value)}`}
            >
              {tag.label}
            </span>
          ))}
      </div>

      {/* Title */}
      <div className={styles.flex}>
        <h3 className={styles.title}>{task.title}</h3>
        <button>
          <i className="fa-solid fa-ellipsis"></i>
        </button>
      </div>

      {/* Rest of the component remains the same */}
      <p className={styles.description}>{task.description}</p>

      <div className={styles.footer}>
        <div className={styles.actions}>
          <img
            src={isClicked ? flagclicked : flag}
            onClick={() => setIsClicked(!isClicked)}
            alt="flag icon"
          />
          <span className={styles.date}>{task.dueDate}</span>
        </div>

        <div className={styles.meta}>
          <span className={styles.id}>D-18</span>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.actions}>
          <img src={comments} alt="comments icon" />
          <span>12 comments</span>
          <img src={folder} alt="Folder icon" />
          <span>0 files</span>
        </div>

        <div className={styles.avatars}>
          <img className={styles.firstAvatar} src={avatar1} alt="avatar" />
          <img className={styles.secondAvatar} src={avatar2} alt="avatar" />
        </div>
      </div>
    </div>
  );
}
