import styles from "./SectionInfoTwo.module.css";

const SectionInfoTwo = () => {
  return (
    <div className={styles.container_section_info}>
      <div className={styles.card}>
        <div className={styles.image_h}></div>
        <div className={styles.title}></div>
        <div className={styles.desc}>
        Isaac y su madre vivían en una pequeña casa en lo alto de una colina. Él pasaba sus días dibujando y jugando, mientras su madre veía programas religiosos. Todo era tranquilo, hasta que un día, ella escuchó una voz celestial.
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.image_h}></div>
        <div className={styles.title}></div>
        <div className={styles.desc}>
        La voz le dijo que su hijo estaba manchado por el pecado y que debía ser purificado. Obediente, su madre tomó un cuchillo, decidida a cumplir la voluntad divina. Isaac, aterrorizado, vio cómo su destino se sellaba.
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.image_h}></div>
        <div className={styles.title}></div>
        <div className={styles.desc}>
        Antes de que fuera demasiado tarde, Isaac encontró una trampilla en su habitación. Sin otra opción, la abrió y se lanzó al vacío, cayendo en un oscuro sótano lleno de peligros que nunca imaginó.
        </div>
      </div>
    </div>
  );
};

export default SectionInfoTwo;
