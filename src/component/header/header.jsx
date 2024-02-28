
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
    <div className="container">
        <div className={styles.header_content}>
          <h1 className={styles.logo}>AnimalPlanet</h1>
            <div className={styles.header_nav}>
            <a className="nav_item" href="/">Главная</a>
            <a className="nav_item" href="/catalog">Каталог</a>
            <a className="nav_item" href="">GitHub</a>
            </div>
            <div className="header_btn">
                <a href="#"  className={styles.btn}>Авторизация</a>
            </div>
        </div>
        </div>
        </header>
  )
}
