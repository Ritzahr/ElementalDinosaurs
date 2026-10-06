import { Card } from "../../atoms/card";
import styles from "./hand.module.css";

const Hand = ({ n }) => {
  const handSlots = Array.from({ length: n})

  return (
    <div className={styles.container}>
      {handSlots.map((n, i) => {
        return (
          <div key={`slot_${i}`} className={`${styles[`card-${i}`]} card`}>
            <Card type="shield" />
          </div>
        );
      })}
    </div>
  );
};

export { Hand };
