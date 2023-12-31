import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { PiBellThin } from "react-icons/pi";
import style from "./Header.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.left}>
        <img className={style.logo} src="./img/mediwave.png" alt="brand" />
      </div>
      <nav className={style.nav}>
        <a className={style.active} href="/">
          Appointments
        </a>
      </nav>
      <div className={style.right}>
        <form className={style.search}>
          <input placeholder="search..." type="search" />
        </form>
        <PiBellThin size="1.5rem" color="#aaa" />
        <LiaEnvelopeOpenTextSolid size="1.5rem" color="#aaa" />
        <img className={style.logo} src="./img/topface.png" alt="face" />
      </div>
    </header>
  )
};