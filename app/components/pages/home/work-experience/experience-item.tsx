"use client";

import Image from "next/image";
import React from "react";
import TechBadge from "../../../tech-badge";
import { useLanguage } from "../../../../contexts/LanguageContext";

const ExperienceItem = () => {
  const { t } = useLanguage();

  return (
    <div>
      <div className="grid grid-cols-[40px_1fr] gap-4 md:gap-10">
        <div className="flex items-center flex-col gap-4">
          <div className="rounded-full border border-gray-500 p-0.5">
            <Image
              src="https://media.licdn.com/dms/image/v2/C4D0BAQFd3kvoWeHHHw/company-logo_200_200/company-logo_200_200/0/1630562110395/multittechengenharia_logo?e=2147483647&v=beta&t=KV6NIcARZWU4vgVz9ybtgsYD1qwzh5GgFSwRMEsQbiI"
              width={40}
              height={40}
              className="rounded-full"
              alt="logo da empresa"
            />
          </div>
          <div className="h-full w-[1px] bg-gray-800"></div>
        </div>

        <div>
          <div className="flex flex-col gap-2 text-sm sm:text-base">
            <a
              href="https://www.linkedin.com/company/multittechengenharia/posts/?feedView=all"
              target="_blank"
              className="text-gray-500 hover:text-sky-400 transition-colors"
            >
              @ {t("experience.multittech.company")}
            </a>
            <h4 className="text-gray-300">
              {t("experience.multittech.role")}
            </h4>
            <span className="text-gray-500">
              {t("experience.multittech.period")}
            </span>
            <p className="text-gray-400 max-w-[600px]">
              {t("experience.multittech.description")}
            </p>
          </div>
          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
            {t("experience.subtitle")}
          </p>
          <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
            <TechBadge name="Python" />
            <TechBadge name="SQlite" />
            <TechBadge name="Amazon EC2" />
            <TechBadge name="Linux" />
            <TechBadge name="MySQL" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[40px_1fr] gap-4 md:gap-10">
        <div className="flex items-center flex-col gap-4">
          <div className="rounded-full border border-gray-500 p-0.5">
            <Image
              src="https://i1.sndcdn.com/avatars-000244276702-h54lww-t1080x1080.jpg"
              width={40}
              height={40}
              className="rounded-full"
              alt="logo da empresa"
            />
          </div>
          <div className="h-full w-[1px] bg-gray-800"></div>
        </div>

        <div>
          <div className="flex flex-col gap-2 text-sm sm:text-base">
            <a
              href="https://inatel.br/ehealth/"
              target="_blank"
              className="text-gray-500 hover:text-sky-400 transition-colors"
            >
              @ {t("experience.ehealth.company")}
            </a>
            <h4 className="text-gray-300">
              {t("experience.ehealth.role")}
            </h4>
            <span className="text-gray-500">
              {t("experience.ehealth.period")}
            </span>
            <p className="text-gray-400 max-w-[600px]">
              {t("experience.ehealth.description")}
            </p>
          </div>
          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
            {t("experience.subtitle")}
          </p>
          <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
            <TechBadge name="Python" />
            <TechBadge name="Dart" />
            <TechBadge name="Flutter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
