import { Card } from "../../atoms/card";
import styles from './deck.module.css';


const Deck = () => {
  return (
    <main className={styles.container}>
      <Card/>
    </main>
  )
};

export { Deck };
