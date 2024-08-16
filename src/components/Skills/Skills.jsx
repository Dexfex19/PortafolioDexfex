import { useLanguage } from "../../Context/LanguageContext";
import { getImageUrl } from "../../utils";
import { useState, useEffect, useRef } from "react";
import styles from "./Skills.module.css";

export const Skills = () => {
  const { translations } = useLanguage();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const carouselTrackRef = useRef(null);

  useEffect(() => {
    const carouselTrack = carouselTrackRef.current;
    if (carouselTrack) {
      const totalWidth = carouselTrack.scrollWidth;
      carouselTrack.style.width = `${totalWidth * 2}px`;
    }
  }, []);

  const technicalSkills = [
    { name: "React", img: "react-color.svg" },
    { name: "JavaScript", img: "javascript-color.svg" },
    { name: "MySQL", img: "mysql-color.svg" },
    { name: "Python", img: "python-color.svg" },
    { name: "SpringBoot", img: "springboot-color.svg" },
    { name: ".NET", img: "dotnet-color.svg" },
  ];

  const softSkills = [
    {
      title: translations.commitmentTitle,
      description: translations.commitmentDescription,
    },
    {
      title: translations.teamworkTitle,
      description: translations.teamworkDescription,
    },
    {
      title: translations.innovationTitle,
      description: translations.innovationDescription,
    },
    {
      title: translations.responsibilityTitle,
      description: translations.responsibilityDescription,
    },
    {
      title: translations.adaptabilityTitle,
      description: translations.adaptabilityDescription,
    },
  ];

  const skillsToDisplay = (skills) =>
    isLargeScreen ? skills.concat(skills) : skills;

  return (
    <section className={styles.skillsSection} id="skills">
      <h2 className={styles.title}>{translations.skillsTitle}</h2>
      <div className={styles.carousel}>
        <div className={styles.carouselTrack} ref={carouselTrackRef}>
          {skillsToDisplay(technicalSkills).map((skill, index) => (
            <div className={styles.carouselItem} key={index}>
              <img src={getImageUrl(`skills/${skill.img}`)} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <h2 className={styles.title}>{translations.softSkillsTitle}</h2>
      <div className={styles.carousel}>
        <div className={styles.carouselTrack}>
          {skillsToDisplay(softSkills).map((skill, index) => (
            <div className={styles.carouselItem} key={index}>
              <h1 className={styles.subTitles}>{skill.title}</h1>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
