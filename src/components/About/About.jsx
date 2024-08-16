import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../Context/LanguageContext";

export const About = () => {
  const { translations } = useLanguage();

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{translations.aboutTitle}</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>{translations.missionTitle}</h3>
              <p>{translations.missionDescription}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>{translations.visionTitle}</h3>
              <p>{translations.visionDescription}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
