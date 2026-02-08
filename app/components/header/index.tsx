"use client";

import Link from "next/link";
import { NavItem } from "./nav-item";
import { Logo } from "../logo";
import { clashDisplay } from "../../utils/fonts";
import { useLanguage } from "../../contexts/LanguageContext";

export const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();

  const NAV_ITEMS = [
    {
      label: t("nav.home"),
      href: "#sobre",
    },
    {
      label: t("nav.skills"),
      href: "#competencias",
    },
    {
      label: t("nav.experience"),
      href: "#experience",
    },
    {
      label: t("nav.education"),
      href: "#formacao",
    },
  ];

  return (
    <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <nav className={`${clashDisplay.className} flex items-center gap-4 sm:gap-10`}>
          <div className="hidden md:flex items-center gap-4 sm:gap-10">
            {NAV_ITEMS.map((item) => (
              <NavItem {...item} key={item.label} />
            ))}
          </div>

          <select
            value={language}
            onChange={(e) => {
              if (e.target.value !== language) {
                toggleLanguage();
              }
            }}
            className="appearance-none pl-2 pr-7 py-1 text-xs font-medium text-gray-300 bg-transparent hover:text-sky-500 transition-colors border border-gray-700 rounded-md hover:border-sky-500 cursor-pointer focus:outline-none focus:border-sky-500 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMUw2IDZMMTEgMSIgc3Ryb2tlPSIjOWNhM2FmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] bg-[length:12px] bg-[right_0.5rem_center] bg-no-repeat"
          >
            <option value="en" className="bg-zinc-900 text-gray-300">EN</option>
            <option value="pt" className="bg-zinc-900 text-gray-300">PT</option>
          </select>
        </nav>
      </div>
    </header>
  );
};
