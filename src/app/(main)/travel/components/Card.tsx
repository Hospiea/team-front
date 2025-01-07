import { BoardList } from "@/types/board";
import styles from "./card.module.css";


const TravelCardComponent = ({title}: BoardList) => {

  return(
    <div className={styles.item}>
      {title}
    </div>
  )
}

export default TravelCardComponent;