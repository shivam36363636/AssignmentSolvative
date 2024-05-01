import { useEffect, useState } from "react";
import styles from "./style.module.css";

export default function Search() {
  const [isFocus, setIsFocus] = useState(false);
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === "/") {
        const inputElement = document.getElementById("yourInputId");

        if (inputElement) {
          inputElement.focus();
          setIsFocus(true);
        }
      }
    };

    document.body.addEventListener("keydown", handleKeyPress);

    return () => {
      document.body.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <div className={`${styles.main} ${isFocus ? styles.focus : ""}`}>
      <input
        onBlur={() => {
          setIsFocus(false);
        }}
        type="text"
        id="yourInputId"
        placeholder="Search places..."
      />
      <div>Ctrl + /</div>
    </div>
  );
}
