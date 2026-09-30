import { fossil_field } from "@/public/Assets/Background";
import styles from './page.module.css';

export default function Home() {
  return (
    <main
      className={styles.image} style={{ backgroundImage: `url(${fossil_field.src})` }} >
    </main>
  )
}
