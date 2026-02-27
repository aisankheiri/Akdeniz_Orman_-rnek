import { useEffect, useMemo, useState } from "react";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

import HeroSection from "./components/sections/HeroSection.jsx";
import ProductsSection from "./components/sections/ProductsSection.jsx";
import FullCycleSection from "./components/sections/FullCycleSection.jsx";
import DividerU from "./components/DividerU.jsx";
import ChairsSection from "./components/sections/ChairsSection.jsx";
import AboutSection from "./components/sections/AboutSection.jsx";
import ProductionSection from "./components/sections/ProductionSection.jsx";
import ApplicationsSection from "./components/sections/ApplicationsSection.jsx";




import { dict } from "./i18n/dict.js";
import "./styles/app.css";

export default function App() {
  const [lang, setLang] = useState(
    () => localStorage.getItem("site_lang") || "tr"
  );

  useEffect(() => {
    localStorage.setItem("site_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useMemo(() => dict[lang], [lang]);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el)
      el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <HeroSection t={t} go={go} />
      <DividerU />
      <ProductsSection t={t} />
      <DividerU flip />
      <FullCycleSection t={t} />
      <DividerU />
      <ChairsSection t={t} />
      <AboutSection t={t} />
      <ProductionSection t={t} />
       <DividerU flip />
      <DividerU />
      <ApplicationsSection t={t} />
      <Footer t={t} />
    </>
  );
}