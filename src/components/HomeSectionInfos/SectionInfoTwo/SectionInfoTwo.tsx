import styles from "./SectionInfoTwo.module.css";

const SectionInfoTwo = () => {
  return (
    <div className={styles.container_section_info}>
      <div className={styles.card_one}>
        <div className={styles.image_h}></div>
        <div className={styles.title}></div>
        <div className={styles.desc}>
        Isaac vivía feliz con su madre en una pequeña casa en lo alto de una colina. Pasaba sus días dibujando y jugando, mientras su madre veía programas religiosos en la televisión. Pero un día, ella escuchó una voz del cielo.
        </div>
      </div>
      <div className={styles.card_one}>
        <div className={styles.image_h}></div>
        <div className={styles.title}></div>
        <div className={styles.desc}>
        La voz le dijo que su hijo estaba corrompido por el pecado y que debía salvarlo. Al principio, su madre le quitó sus juguetes y ropas, aislándolo del mundo. Pero la voz insistió… su hijo debía ser sacrificado.
        </div>
      </div>
      <div className={styles.card_one}>
        <div className={styles.image_h}></div>
        <div className={styles.title}></div>
        <div className={styles.desc}>
        Al ver a su madre entrar a la habitación con un cuchillo, Isaac entró en pánico. Miró a su alrededor y encontró una trampilla en el suelo. Sin otra opción, la abrió y saltó… descendiendo hacia lo desconocido.
        </div>
      </div>
    </div>
  );
};

export default SectionInfoTwo;
