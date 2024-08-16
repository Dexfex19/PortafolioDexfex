/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";
import en from "../Chains/en.json";
import es from "../Chains/es.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const translations = language === "es" ? es : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
