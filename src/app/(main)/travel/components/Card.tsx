import { BoardList } from "@/types/board";
import styles from "./card.module.css";
import { useRouter } from "next/navigation";
import { FRONT_URL } from "@/config/config";


const TravelCardComponent = ({id, title}: BoardList) => {
  const router = useRouter();

  return(
    <div onClick={() => {
      router.push(`${FRONT_URL}/travel/detail/${id}`)
    }} className={styles.item}>
      {title}
    </div>
  )
}

export default TravelCardComponent;