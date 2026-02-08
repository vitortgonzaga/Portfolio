"use client";

import React from "react";
import { HiNewspaper } from "react-icons/hi";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";
import { Title } from "../../../title";
import { clashDisplay } from "../../../../utils/fonts";
import { ScrollReveal } from "../../../scroll-reveal";
import { useLanguage } from "../../../../contexts/LanguageContext";

const MOCK_CONTACTS = [
  {
    url: "https://github.com/vitortgonzaga",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://www.linkedin.com/in/vitorgonzaga10/",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "https://wa.me/5512996732304",
    icon: <TbBrandWhatsapp />,
  },
];

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="sobre"
      className="w-full min-h-screen flex flex-col justify-center items-center py-32"
    >
      <div className="container flex items-center justify-center">
        <ScrollReveal className="w-full max-w-[800px] mx-auto">
          <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <Title />
              <h2 className={`${clashDisplay.className} text-sky-500 font-semibold text-xl mt-2`}>
                {t("hero.subtitle")}
              </h2>

              <p className={`${clashDisplay.className} text-gray-300 my-6 text-sm sm:text-base leading-relaxed`}>
                {t("hero.description")}
              </p>
              <div className="flex justify-center">
                <a
                  href="/curriculo.pdf"
                  target="_blank"
                  className="bg-sky-600 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-sky-500 transition-all disabled:opacity-50 cursor-pointer w-max"
                >
                  {t("hero.resume")}
                  <HiNewspaper size={18} />
                </a>
              </div>
              <div className="mt-6 flex justify-center">
                <div className="text-5xl text-gray-300 flex items-center h-20 gap-3">
                  {MOCK_CONTACTS.map((contact, index) => (
                    <a
                      href={contact.url}
                      key={`contact-${index}`}
                      target="_blank"
                      className="hover:text-sky-500 transition-colors"
                    >
                      {contact.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
