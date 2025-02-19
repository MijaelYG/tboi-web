import styles from './SectionInfo.module.css'

const SectionInfo = () => {
  return (
    <div className={styles.container_section_info}>
        <div className={styles.info_left}>
            <h1>HOLA</h1>
        </div>
        <div className={styles.info_right}>
            <h2>IZQUIERDA</h2>
        </div>
    </div>
  )
}

export default SectionInfo
