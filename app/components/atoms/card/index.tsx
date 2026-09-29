import { ClawIcon } from "../claw-icon";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerFrame}>
        <div className={styles.innerBackground}>
            <div className={styles.shape}>
              <div className={styles.icon}>
                <ClawIcon />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export { Card };
