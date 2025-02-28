import { motion, MotionValue, useInView, useTransform } from "framer-motion";
import style from "./Banner.module.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

interface BannerProps{
  scrollYProgress: MotionValue<number>
}

const Banner = ({scrollYProgress}: BannerProps) => {
  const Btn = useRef<HTMLDivElement | null>(null);
  const BtnpinView= useInView(Btn,{amount: "all", margin: "-30px"});

  const opacity = useTransform(scrollYProgress, [0.1,0.1],[0,1])
  const flex = useTransform(scrollYProgress, [0.1,0.1],[0,1])
  return (
    <section className={style.section_banner}>
      <div className={style.banner}>
          <div className={style.container_banner}>
            <div className={style.logo}>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                src="/img/logo/Logo.webp"
                alt=""
              />
              <div className={style.fly}></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className={style.text}
            >
              <p>
                "¡Explora los secretos ocultos de The Binding of Isaac!
                Sumérgete en un mundo lleno de misterios, desafíos y sorpresas
                mientras descubres estrategias avanzadas, desentrañas los
                secretos de cada personaje y desbloqueas poderosos ítems.
                Aprende a enfrentar a los enemigos más temibles y conviértete en
                un verdadero veterano."
              </p>
            </motion.div>
            <div ref={Btn} className={style.btn_info}>
              <motion.div  className={style.btn_bn} initial={{opacity:0, y:10}} animate={{opacity:BtnpinView ? 1 : 0, y: BtnpinView ? 0 : 10}} transition={{duration:0.4}}>
                <img src="/img/UI/explorar.png" alt="" />
              </motion.div>
              <motion.div initial={{opacity:0, y:10}} animate={{opacity:BtnpinView ? 1 : 0, y: BtnpinView ? 0 : 10}} transition={{duration:0.4, delay: 0.1}} className={style.btn_bn}>
                <Link
                  to={
                    "https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth/"
                  }
                >
                  <img src="/img/UI/jugar.png" alt="" />
                </Link>
              </motion.div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Banner;
