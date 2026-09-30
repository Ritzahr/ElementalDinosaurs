import { ActionIcon } from "../action-icon";
import styles from "./card.module.css";

const Card = ({type}:string) => {
  console.log(type)
  return (
    <div className={styles.container}>
      <div className={styles.innerFrame}>
        <div className={styles.innerBackground}>
            <div className={styles.shape}>
              <div className={styles.icon}>
                <ActionIcon type={type}/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export { Card };
