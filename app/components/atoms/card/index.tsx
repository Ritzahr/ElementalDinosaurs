import { ActionIcon } from "../action-icon";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerFrame}>
        <div className={styles.innerBackground}>
            <div className={styles.shape}>
              <div className={styles.icon}>
                <ActionIcon type="shield"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export { Card };
