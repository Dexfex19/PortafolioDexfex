import styles from "./AntiHero.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../Context/LanguageContext";

export const AntiHero = () => {
  const { translations } = useLanguage();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Daniel Echeverria</h1>
        <p className={styles.description}>{translations.antiHeroDescription}</p>
      </div>
      <img
        src={getImageUrl("antihero/buho.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
