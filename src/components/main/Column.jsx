import { BsThreeDots } from "react-icons/bs";
import style from "./Main.module.css";
// import { TaskCard } from "./TaskCard"

export function Column({ title }) {
  return (
    <div className={style.column}>
      <div className={style.columnHeader}>
        <p>{title}</p>
        {/* <BsThreeDots /> */}
      </div>
      <div className={style.cardList}>
        <div>todays</div>
      </div>
    </div>
  )
}
