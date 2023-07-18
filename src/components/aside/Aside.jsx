import style from "./Aside.module.css"

export function Aside() {
  return (
    <aside className={style.header}>
      <div>
        <nav>
          <a className={style.active} href="/">
            dashboard
          </a>
          <a className={style.active} href="/">
            appointments
          </a>
          <a className={style.active} href="/">
            calendar
          </a>
          <a className={style.active} href="/">
            patients
          </a>
          <a className={style.active} href="/">
            doctors
          </a>
          <a className={style.active} href="/">
            clinics
          </a>
        </nav>
      </div>
      <div>
        <nav>
          <a className={style.active} href="/">settings</a>
          <a className={style.active} href="/">help</a>
        </nav>
      </div>
    </aside>
  )
}
