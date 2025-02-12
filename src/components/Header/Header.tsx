import { Link } from "react-router-dom"
import style from "./Header.module.css"

const Header = () => {
  return (
    <header className="container">
        <div className={style.header}>
            <div className={style.nav_btn}>
            <Link to={""}>Inicio <img src="/img/nav/start_search.webp" alt="" /></Link>
            </div>
            <div className={style.nav_btn}>
            <Link to={""}>¿De que trata? <img src="/img/nav/game_search.webp" alt="" /></Link>
            </div>
            <div className={style.nav_btn}>
            <Link to={""}>Items <img src="/img/nav/item_search.webp" alt="" /></Link>
            </div>
            <div className={style.nav_btn}>
            </div>
            <div className={style.nav_btn}>
            <Link to={""}>Enemigos <img src="/img/nav/enemie_search.webp" alt="" /></Link>
            </div>
            <div className={style.nav_btn}>
            <Link to={""}>Personajes</Link>
            </div>
            <div className={style.nav_btn}>
            <Link to={""}>Salas</Link>
            </div>
        </div>
    </header>
  )
}

export default Header
