import { useLanguage } from "../Context/LanguageContext";

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button onClick={() => setLanguage(language === "es" ? "en" : "es")}>
      {language === "es" ? "Switch to English" : "Cambiar a Español"}
    </button>
  );
};
