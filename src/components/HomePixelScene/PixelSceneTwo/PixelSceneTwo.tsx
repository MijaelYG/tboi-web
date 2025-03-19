import { motion, MotionValue, useSpring, useTransform } from 'framer-motion'
import style from './PixelSceneTwo.module.css'

interface PropsPixelScene {
    ScrollYProgress: MotionValue<number>;
    ScrollStartEnd: [number, number];
}

const PixelSceneTwo = ({ScrollYProgress,ScrollStartEnd}: PropsPixelScene) => {
    const start = ScrollStartEnd[0];
    const end = ScrollStartEnd[1];

    const animation = useTransform(ScrollYProgress, [start,end],[0,30]);
    const x1 = useTransform(ScrollYProgress,[start,end],[0,50])
    const y1 = useTransform(ScrollYProgress,[start,end],[0,-50])
    const animationsmooth = useSpring(animation,{stiffness:300, damping:40})
    const x1smooth = useSpring(x1,{stiffness:300, damping:40})
    const y1smooth = useSpring(y1,{stiffness:300, damping:40})
    const value = useTransform(animationsmooth, (value) => `calc(-${10}vw *${Math.floor(value) % 5})`);
    const valuex1 = useTransform(x1smooth, (value) => `${value}%`)
    const valuexy1 = useTransform(y1smooth, (value) => `${value}%`)

    const animation2 = useTransform(ScrollYProgress, [start,end],[3,30]);
    const move2 = useTransform(ScrollYProgress,[start,end],[0,-100])
    const animation2smooth = useSpring(animation2,{stiffness:300, damping:40})
    const move2smooth = useSpring(move2,{stiffness:300, damping:40})
    const value2 = useTransform(animation2smooth, (value) => `calc(-${10}vw *${Math.floor(value) % 5})`);
    const move2value = useTransform(move2smooth, (value) => `${value}%`)

    const animation3 = useTransform(ScrollYProgress, [start,end],[0,12]);
    const move3 = useTransform(ScrollYProgress,[start,end],[0,-90])
    const animation3smooth = useSpring(animation3,{stiffness:300, damping:40})
    const move3smooth = useSpring(move3,{stiffness:300, damping:40})
    const value3 = useTransform(animation3smooth, (value) => `calc(-${6.5}vw *${Math.floor(value) % 10})`);
  return (
    <>
    <motion.div className={style.pixel_monster1} style={{backgroundPositionX:value, x:valuex1, y:valuexy1}}>
    </motion.div>
    <motion.div className={style.pixel_monster2} style={{backgroundPositionX:value2, x:move2value,y:move2value}}>
    </motion.div>
    <motion.div className={style.pixel_isaac} style={{backgroundPositionX:value3, x:move3smooth}}>
    </motion.div>
    </>
  )
}

export default PixelSceneTwo
