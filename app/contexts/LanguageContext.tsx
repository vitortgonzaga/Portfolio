"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.education": "Education",

    // Hero Section
    "hero.greeting": "Hello, my name is",
    "hero.title": "Vitor Torres",
    "hero.subtitle": "Fullstack Software Engineer",
    "hero.description": "Building scalable web experiences, from frontend to backend.",
    "hero.contact": "Get in Touch",
    "hero.resume": "View my Resume",

    // Skills
    "skills.subtitle": "skills",
    "skills.title": "Knowledge and Interests",
    "skills.tests": "Tests",

    // Experience
    "experience.subtitle": "skills",
    "experience.title": "Professional Experience",
    "experience.multittech.company": "Multittech",
    "experience.multittech.role": "Backend Development Intern",
    "experience.multittech.period": "Mar 2025 • Present",
    "experience.multittech.description": "During my internship, I assisted in the development of various projects using Google Scripts. I actively participated in the development of an IoT solution for the agroindustrial sector, implemented on a Raspberry Pi, which measures in real-time the weight and yield of the harvest, along with scripts and a web platform for real-time production monitoring, optimizing decision-making in the agroindustrial sector.",
    "experience.ehealth.company": "E-Health Innovation Center",
    "experience.ehealth.role": "Scientific Research Intern",
    "experience.ehealth.period": "Nov 2023 • Feb 2025",
    "experience.ehealth.description": "During my time in scientific research, I worked on the development of the ELA IoT System, a project focused on communication and accessible home automation for people with ALS. The interface uses Eye Tracking to facilitate interaction without the need for manual movements.",

    // Education
    "education.subtitle": "Education",
    "education.title": "Academic Background",
    "education.university.course": "Software Engineering",
    "education.university.institution": "Instituto Nacional de Telecomunicações – INATEL",
    "education.university.period": "2022 - 2027",
    "education.highschool.course": "High School and Technical in Electronics",
    "education.highschool.institution": "Colégio Técnico Industrial de Guaratinguetá - CTIG UNESP",
    "education.highschool.period": "2018 - 2020",

    // Contact
    "contact.subtitle": "contact",
    "contact.title": "Let's work together? Get in touch",
    "contact.description": "I'm currently available for new opportunities. Whether you have a project in mind or just want to chat about technology, feel free to reach out through LinkedIn or WhatsApp.",

    // Footer
    "footer.copyright": "© 2026 Vitor Gonzaga.",
  },
  pt: {
    // Header
    "nav.home": "Início",
    "nav.skills": "Competências",
    "nav.experience": "Experiências",
    "nav.education": "Formação",

    // Hero Section
    "hero.greeting": "Olá, meu nome é",
    "hero.title": "Vitor Torres",
    "hero.subtitle": "Engenheiro de Software Fullstack",
    "hero.description": "Construindo experiências web escaláveis, do frontend ao backend.",
    "hero.contact": "Entre em Contato",
    "hero.resume": "Ver meu Currículo",

    // Skills
    "skills.subtitle": "competências",
    "skills.title": "Conhecimentos e Interesses",
    "skills.tests": "Testes",

    // Experience
    "experience.subtitle": "experiências",
    "experience.title": "Experiência Profissional",
    "experience.multittech.company": "Multittech",
    "experience.multittech.role": "Estagiário em Desenvolvimento Back-end",
    "experience.multittech.period": "Mar 2025 • Presente",
    "experience.multittech.description": "Durante meu estágio, atuei auxiliando no desenvolvimento de diversos projetos usando Google Scripts. Participei ativamente do desenvolvimento de uma solução IoT para o setor agroindustrial, implementada em um Raspberry Pi, que mede em tempo real o peso e o rendimento da colheita, com scripts, além de uma plataforma web para monitoramento da produção em tempo real, otimizando a tomada de decisão no setor agroindustrial.",
    "experience.ehealth.company": "E-Health Innovation Center",
    "experience.ehealth.role": "Pesquisador em Iniciação Científica",
    "experience.ehealth.period": "Nov 2023 • Fev 2025",
    "experience.ehealth.description": "Durante meu período na iniciação científica, atuei no desenvolvimento do Sistema IoT ELA, um projeto focado em comunicação e automação residencial acessível para pessoas com ELA. A interface utiliza Eye Tracking para facilitar a interação sem a necessidade de movimentos manuais.",

    // Education
    "education.subtitle": "Formação",
    "education.title": "Formação Acadêmica",
    "education.university.course": "Engenharia de Software",
    "education.university.institution": "Instituto Nacional de Telecomunicações – INATEL",
    "education.university.period": "2022 - 2027",
    "education.highschool.course": "Ensino Médio e Técnico em Eletreletrônica",
    "education.highschool.institution": "Colégio Técnico Industrial de Guaratinguetá - CTIG UNESP",
    "education.highschool.period": "2018 - 2020",

    // Contact
    "contact.subtitle": "contato",
    "contact.title": "Vamos trabalhar juntos? Entre em contato",
    "contact.description": "Estou atualmente disponível para novas oportunidades. Se você tem um projeto em mente ou apenas quer conversar sobre tecnologia, sinta-se à vontade para entrar em contato através do LinkedIn ou WhatsApp.",

    // Footer
    "footer.copyright": "© 2026 Vitor Gonzaga.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
