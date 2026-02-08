"use client";

import React from "react";
import { SectionTitle } from "../../../section-title";
import SchoolItem from "./school-item";
import { ScrollReveal } from "../../../scroll-reveal";
import { useLanguage } from "../../../../contexts/LanguageContext";

const SchoolHistory = () => {
  const { t } = useLanguage();

  return (
    <ScrollReveal>
      <section
        id="formacao"
        className="container py-16"
      >
        <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
              <SectionTitle subtitle={t("education.subtitle")} title={t("education.title")} />
            </div>

            <div className="flex flex-col gap-4">
              <SchoolItem />
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default SchoolHistory;
