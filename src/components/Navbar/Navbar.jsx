import { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../Context/LanguageContext";

export const Navbar = () => {
  const { language, setLanguage, translations } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        {translations.portfolio}
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">{translations.aboutTitle}</a>
          </li>
          <li>
            <a href="#skills">{translations.skills}</a>
          </li>
          <li>
            <a href="#projects">{translations.projectsTitle}</a>
          </li>
          <li>
            <a href="#contact">{translations.contactTitle}</a>
          </li>
          <li>
            <button
              className={styles.languageButton}
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
            >
              {language === "es" ? "English" : "Español"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
