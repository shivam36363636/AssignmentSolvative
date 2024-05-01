import styles from "./style.module.css";

export default function GridItem({ numberOfColoum, data }) {
  return (
    <div className={styles.main}>
      {Array(numberOfColoum)
        .fill(null)
        .map((_, index) => (
          <div key={index}>{data[index]}</div>
        ))}
    </div>
  );
}
