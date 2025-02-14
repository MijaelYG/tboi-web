import style from "./Banner.module.css";

const Banner = () => {
  return (
    <div className="container">
        <div className={style.banner}>
          <div className={style.scene}>
            <div className={style.shadow}>
            </div>
            <div className={style.shadow}>
            </div>
            <div className={style.container_banner}>
              <div className={style.logo}>
                <img src="/img/logo/Logo.webp" alt="" />
              </div>
              <div className={style.text}>
                <p>"¡Explora los secretos ocultos de The Binding of Isaac! Sumérgete en un mundo lleno de misterios, desafíos y sorpresas mientras descubres estrategias avanzadas, desentrañas los secretos de cada personaje y desbloqueas poderosos ítems. Aprende a enfrentar a los enemigos más temibles y conviértete en un verdadero veterano."</p>
              </div>
              <div className={style.btn_info}>
                <div className={style.btn_expl}></div>
                <div className={style.btn_expl}></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner
