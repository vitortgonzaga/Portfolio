import Image from "next/image";
import React from "react";

import { HiArrowNarrowRight } from "react-icons/hi";
import TechBadge from "../../../../tech-badge";
import Link from "../../../../link";

const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-10 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={300}
          src="/images/portfolio.png"
          alt="Thumbnail do projeto Portfolio"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-center"
        />
      </div>
      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <span className="w-3 h-3 bg-sky-400 rounded-full"></span>
          Portfolio
        </h3>

        <p className="text-gray-400 my-6">
          Este projeto consiste no desenvolvimento completo do meu portfólio
          pessoal, um espaço digital criado para apresentar minha jornada,
          habilidades e trabalhos. O principal desafio foi construir uma
          plataforma que fosse ao mesmo tempo rápida, esteticamente agradável e
          funcional. Para isso, utilizei Next.js para otimizar o desempenho e a
          indexação (SEO), enquanto o Tailwind CSS permitiu a criação de um
          design moderno e totalmente responsivo, garantindo uma experiência de
          usuário consistente em qualquer dispositivo.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-[350px]">
          <TechBadge name="Next.js" />
          <TechBadge name="Tailwind" />
        </div>

        <Link href="https://github.com/Torress01/Portfolio" target="blank">
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
