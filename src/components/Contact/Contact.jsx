import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../Context/LanguageContext";

export const Contact = () => {
  const { translations } = useLanguage();

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{translations.titleContact}</h2>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img
              className={styles.icons}
              src={getImageUrl("contact/minutemailer.svg")}
              alt="Email icon"
            />
            <a href="mailto:decheverriao@ucenfotec.ac.cr">
              daniel.echeverria@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img
              className={styles.icons}
              src={getImageUrl("contact/linkedin.svg")}
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/in/daniel-echeverria-ortega-a878aa281">
              linkedin.com/DanielEcheverria
            </a>
          </li>
          <li className={styles.link}>
            <img
              className={styles.icons}
              src={getImageUrl("contact/git.svg")}
              alt="Github icon"
            />
            <a href="https://github.com/Dexfex19">
              github.com/DanielEcheverria
            </a>
          </li>
          <li className={styles.link}>
            <img
              className={styles.icons}
              src={getImageUrl("contact/whatsapp.svg")}
              alt="WhatsApp icon"
            />
            <a href="https://wa.me/50670714411">{translations.whatsapp}</a>
          </li>
        </ul>
      </div>
      <form
        className={styles.form}
        action="https://formspree.io/f/xovalnab"
        method="POST"
      >
        <h3 className={styles.formTitle}>{translations.contactFormTitle}</h3>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder={translations.firstName}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder={translations.lastName}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={translations.email}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder={translations.phone}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="address"
            name="address"
            placeholder={translations.address}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder={translations.message}
            required
          />
        </div>
        <button type="submit" className={styles.submitBtn}>
          {translations.submit}
        </button>
      </form>
    </footer>
  );
};
