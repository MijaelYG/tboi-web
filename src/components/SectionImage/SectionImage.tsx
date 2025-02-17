import React from 'react'
import styles from './SectionImage.module.css'

interface PropsImagen{
    src: string;
    children?: React.ReactNode;
}

const SectionImage = ({src,children}: PropsImagen) => {
  return (
    <section className="container">
        <div className={styles.container_section}>
            <div className={styles.scene} style={{backgroundImage: `url(${src})`}}>
                {children}
            </div>
        </div>
    </section>
  )
}

export default SectionImage
