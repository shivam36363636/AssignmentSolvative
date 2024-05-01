import styles from "./style.module.css";

export default function Search() {
  return (
    <div className={styles.main}>
      <input type="text" placeholder="Search places..." />
      <div>Ctrl + /</div>
    </div>
  );
}
