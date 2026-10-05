import { fossil_field } from "@/public/Assets/Background";
import styles from "./page.module.css";
import { Deck } from "../components/molecules/deck";
import { Hand } from "../components/molecules/hand";

export default function Home() {
  return (
    <main
      className={styles.image}
      style={{ backgroundImage: `url(${fossil_field.src})` }}
    > 
      <Hand n={5}/>
      <Deck />
    </main>
  );
}
