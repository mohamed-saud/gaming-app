import styles from "../styles/Guides.module.css";
import { useEffect } from "react";
export default function Guides() {
  useEffect(() => {
    fetch("/.netlify/functions/guides")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={styles.guides}>
      <h2>All Guides</h2>
    </div>
  );
}
