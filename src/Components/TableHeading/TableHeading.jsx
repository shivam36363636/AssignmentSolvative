import styles from "./style.module.css";
export default function TableHeading({ children }) {
  return <div className={styles.main}>{children}</div>;
}
