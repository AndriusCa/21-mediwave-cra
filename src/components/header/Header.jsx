import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { PiBellThin } from "react-icons/pi";
import logo from "../../img/mediwave.png";
import face from '../../img/topface.png'
import style from "./Header.module.css";


export function Header() {
  return (
    <header className={style.header}>
      <div className={style.left}>
        <img className={style.logo} src={logo} alt="Logo" />
      </div>
      <nav className={style.nav}>
        <a className={style.active} href="/">
          Appointments
        </a>
      </nav>
      <div className={style.right}>
        <form className={style.search}>
          <input type="search" />
        </form>
        <PiBellThin size="1.5rem" color="#aaa" />
        <LiaEnvelopeOpenTextSolid size="1.5rem" color="#aaa" />
        <img className={style.logo} src={face} alt="face" />
      </div>
    </header>
  )
}