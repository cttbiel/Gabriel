import { createContext, useState } from "react";
import en from "../Languages/en";
import pt from "../Languages/pt";
import fr from "../Languages/fr";

export const LanguageContext = createContext();

const languageList = ["en", "pt", "fr"];

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const texts = {
    en,
    pt,
    fr,
  }[language];

  const toggleLanguage = () => {
    const currentIndex = languageList.indexOf(language);
    const nextLanguage = languageList[(currentIndex + 1) % languageList.length];
    setLanguage(nextLanguage);
  };

  const nextFlag = {
    en: "pt",
    pt: "fr",
    fr: "en",
  }[language];

  return (
    <LanguageContext.Provider
      value={{ language, texts, toggleLanguage, nextFlag }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
