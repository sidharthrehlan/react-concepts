import React, { useState, Suspense } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next, Trans } from "react-i18next";

import LanguageSelector from "./languageSelector/LanguageSelector";
import "./App.css";

import common_fr from "./resources/lang/fr/common.json";
import common_en from "./resources/lang/en/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: common_en },
    fr: { translation: common_fr },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  const langChange = (lang) => {
    i18n.changeLanguage(lang);
    setCount((count) => count + 1);
  };
  return (
    <Suspense fallback="loading">
      <div>
        <LanguageSelector langChange={langChange} />
        <h2>{t("welcome")}</h2>
        <div>
          <Trans components={{ bold: <strong /> }}>importantWord</Trans>
        </div>
        <div>{t("langChange", { count })}</div>
      </div>
    </Suspense>
  );
}

export default App;
