import style from '../button/Button.module.css';

export function Button() {
  return (
    <div className={style.buttonGroup}>
      <a className={style.button} href="/">View details</a>
    </div>
  )
}