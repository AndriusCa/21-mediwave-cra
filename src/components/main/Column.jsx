import style from "./Main.module.css";

export function Column({ title }) {
  return (
    <div className={style.column}>
      <div className={style.columnHeader}>
        <p>{title}</p>
      </div>
      <div className={style.cardList}>
        <div>
          <img src="public/logo192.png" alt="logo" />
        </div>
      </div>
    </div>
  )
};
