"use client";

import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="h-14 w-full flex justify-center items-center py-2 bg-transparent border-t border-zinc-800/30">
      <div className="container flex justify-between items-center">
        <span className="text-sm text-gray-400">
          {t("footer.copyright")}
        </span>
        <div className="flex items-center gap-6 text-gray-400 text-sm">
          <a
            href="https://www.linkedin.com/in/vitorgonzaga10/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/vitortgonzaga"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
