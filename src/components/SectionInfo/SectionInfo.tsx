import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'
import styles from './SectionInfo.module.css'
import { useRef } from 'react'

const SectionInfo = () => {

  const leftRef = useRef<HTMLDivElement | null>(null)
    const {scrollYProgress} = useScroll({
      target:leftRef, offset:["start 50%", "50% 60%" ]
    })

    useMotionValueEvent(scrollYProgress,"change",(latest) =>{
      console.log(latest)
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 55]);
    const xSmooth = useSpring(x, { stiffness: 50, damping: 10 });
  return (
    <div ref={leftRef} className={styles.container_section_info}>
        <motion.div  style={{opacity: scrollYProgress, x: xSmooth , transition:"ease"}} className={styles.info_left}>
            <h1>ENEMIGOS MORTALES</h1>
            <p>Enfréntate a todo tipo de enemigos mientras exploras las oscuras y retorcidas habitaciones del sotanó. Desde pequeñas criaturas hasta horribles abominaciones, cada enemigo tiene su propio patrón de ataque y mecánicas únicas.</p>
        </motion.div>
        <motion.div className={styles.info_right}>
        <p>"Aprende a esquivar, atacar y sacar el máximo provecho de los objetos a tu disposición. ¿Tienes lo necesario para sobrevivir en este desafiante roguelike?"</p>
        </motion.div>
    </div>
  )
}

export default SectionInfo
