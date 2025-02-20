import styles from './SectionInfo.module.css'

const SectionInfo = () => {
  return (
    <div className={styles.container_section_info}>
        <div className={styles.info_left}>
            <h1>HOLA</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, recusandae! Dicta aut deserunt praesentium ipsa debitis incidunt aspernatur aperiam, dolorum amet? Deleniti culpa distinctio cum adipisci perspiciatis laudantium tempore ipsam.</p>
        </div>
        <div className={styles.info_right}>
            <h2>IZQUIERDA</h2>
        </div>
    </div>
  )
}

export default SectionInfo
