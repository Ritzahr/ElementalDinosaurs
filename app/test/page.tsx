import { fossil_field } from "@/public/Assets/Background";
import styles from './page.module.css';
import { Card } from "../components/atoms/card";

export default function Home() {
  return (
    <main
      className={styles.image} style={{ backgroundImage: `url(${fossil_field.src})` }} >
      <div className={styles.placeholder}>
        <Card type="shield"/>
        <div className={styles.altCard}>
          <Card type="claw" />
        </div>
        <div className={styles.altCard}>
          <Card type="return" />
        </div>
      </div>
    </main>
  )
}
