import Image from "next/image";
import React from "react";
import TechBadge from "../../../tech-badge";

const SchoolItem = () => {
  return (
    <div className="grid grid-cols-[40px_1fr] gap-4 md:gap-10">
      <div className="flex items-center flex-col gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="/images/inatel.jpg"
            width={40}
            height={40}
            className="rounded-full"
            alt="logo da faculdade"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://inatel.br/home/"
            target="_blank"
            className="text-gray-500 hover:text-sky-400 transition-colors"
          >
            @ Instituto Nacional de Telecomunicações – INATEL
          </a>
          <h4 className="text-gray-300">Engenharia de Software</h4>
          <span className="text-gray-500">2022 - 2027</span>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Principais conhecimentos
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="C++" />
          <TechBadge name="Java" />
          <TechBadge name="Python" />
          <TechBadge name="MongoDB" />
          <TechBadge name="MySQL" />
          <TechBadge name="Cypress" />
          <TechBadge name="Postman" />
        </div>
      </div>
      <div className="flex items-center flex-col gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="https://www.feg.unesp.br/images/logo-open-graph.jpg"
            width={50}
            height={50}
            className="rounded-full"
            alt="logo da faculdade"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.feg.unesp.br/#!/cotec"
            target="_blank"
            className="text-gray-500 hover:text-sky-400 transition-colors"
          >
            @ Colégio Técnico Industrial de Guaratinguetá - CTIG UNESP
          </a>
          <h4 className="text-gray-300">
            Ensino Médio e Técnico em Eletroletrônica
          </h4>
          <span className="text-gray-500">2018 - 2020</span>
        </div>
      </div>
    </div>
  );
};

export default SchoolItem;
