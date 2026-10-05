import { fossil_field } from "@/public/Assets/Background";
import styles from './page.module.css';
import { Card } from "../components/atoms/card";
import { Deck } from "../components/molecules/deck";

export default function Home() {
  return (
    <main
      className={styles.image} style={{ backgroundImage: `url(${fossil_field.src})` }} >
      <div className={styles.placeholder}>
        <Card type="shield"/>
      </div>
      <Deck />
    </main>
  )
}
