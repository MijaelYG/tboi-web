import style from "./Banner.module.css";

const Banner = () => {
  return (
    <div className="container">
        <div className={style.banner}>
          <div className={style.scene}>
            <div className={style.container_banner}>
              <div className={style.logo}>
                <img src="/img/logo/Logo.webp" alt="" />
              </div>
              <div className={style.text}>
                <p>"Descubre todo sobre uno de los juegos roguelike más icónicos: consejos, secretos y curiosidades para jugadores nuevos y veteranos."</p>
              </div>
              <div className="btn_info">
                <button>ver mas</button>
                <button>jugar</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner
