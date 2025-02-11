import { Link } from "react-router-dom"
import style from "./Header.module.css"

const Header = () => {
  return (
    <header className="container">
        <div className={style.header}>
            <div className={style.nav_btn}>
            <Link to={""}>Inicio</Link>
            </div>
            <div className={style.nav_btn}>
            <Link to={""}>¿De que trata?</Link>
            </div>
            <div className={style.nav_btn}>
            <Link to={""}>Items</Link>
            </div>
            <div className={style.nav_btn}>
            </div>
            <div className={style.nav_btn}>
            <Link to={""}>Enemigos</Link>
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
