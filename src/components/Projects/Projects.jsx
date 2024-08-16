import { useState } from "react";
import styles from "./Projects.module.css";
import { useLanguage } from "../../Context/LanguageContext";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { translations } = useLanguage(); // Obtén las traducciones

  const projects = [
    {
      title: translations.appSicaTitle,
      imageUrl: getImageUrl("projects/sica.jpg"), // Actualiza con la ruta correcta
      description: translations.appSicaDescription,
      repoUrl: "https://github.com/Dexfex19/AplicacionSica",
    },
    {
      title: translations.petIncTitle,
      imageUrl: getImageUrl("projects/petinc.jpg"), // Actualiza con la ruta correcta
      description: translations.petIncDescription,
      repoUrl: "https://github.com/Dexfex19/PetInc",
    },
    {
      title: translations.secureProyectFrontEndTitle,
      imageUrl: getImageUrl("projects/secure.jpg"), // Actualiza con la ruta correcta
      description: translations.secureProyectFrontEndDescription,
      repoUrl: "https://github.com/Dexfex19/SecureProyectReact",
    },
    {
      title: translations.secureProyectBackEndTitle,
      imageUrl: getImageUrl("projects/backend.jpg"), // Actualiza con la ruta correcta
      description: translations.secureProyectBackEndDescription,
      repoUrl: "https://github.com/Dexfex19/SecureProyectBackEnd",
    },
    {
      title: translations.qtvDatabaseTitle,
      imageUrl: getImageUrl("projects/bases.jpg"), // Actualiza con la ruta correcta
      description: translations.qtvDatabaseDescription,
      repoUrl: "https://github.com/Dexfex19/BaseDeDatosStreamingService",
    },
    {
      title: translations.ventiladorAutomaticoTitle,
      imageUrl: getImageUrl("projects/ideaboard.jpg"), // Actualiza con la ruta correcta
      description: translations.ventiladorAutomaticoDescription,
      repoUrl: "https://github.com/Dexfex19/ExpoCenfo",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="projects" className={styles.projects}>
      <h2>{translations.projectsTitle}</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`${styles.card} ${
            activeIndex === index ? styles.active : ""
          }`}
        >
          <div className={styles.header} onClick={() => toggleAccordion(index)}>
            <h3>{project.title}</h3>
          </div>
          {activeIndex === index && (
            <div className={styles.content}>
              <img src={project.imageUrl} alt={`${project.title} image`} />
              <p>{project.description}</p>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.repoBtn}
              >
                {translations.viewOnGitHub}
              </a>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};
