import { fossil_field } from "@/public/Assets/Background";
import { BackgroundIMG } from "./components/atoms/background-image";
import { Card } from "./components/atoms/card";
import styles from './page.module.css';

export default function Home() {
  return (
    <main
      className={styles.image} style={{ backgroundImage: `url(${fossil_field.src})` }} >
      <div className={styles.placeholder}>
        <Card />
        </div>
    </main>
  )
}
