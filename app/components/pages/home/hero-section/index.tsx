import Image from "next/image";
import React from "react";
import { HiNewspaper } from "react-icons/hi";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";
import { Title } from "../../../title";
import { clashDisplay } from "../../../../utils/fonts";

const MOCK_CONTACTS = [
  {
    url: "https://github.com/Torress01",
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
  return (
    <section
      id="sobre"
      className="w-full lg:h-[755px] flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]"
    >
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <Title />
          <h2 className={`${clashDisplay.className} text-sky-500 font-semibold text-xl mt-2`}>
            Engenheiro de Software
          </h2>

          <p className={`${clashDisplay.className} text-gray-400 my-6 text-sm sm:text-base`}>
            Sou um desenvolvedor apaixonado por tecnologia, com mais de 1 ano de
            experiência na criação de interfaces de usuário modernas, bonitas e
            funcionais. Estou sempre em busca de projetos desafiadores que me
            permitam evoluir como profissional. Tenho grande interesse pelas
            áreas de DevOps e computação em nuvem, onde venho aprofundando meus
            conhecimentos para construir soluções escaláveis e eficientes. Estou
            sempre aberto a novas oportunidades e pronto para encarar novos
            desafios.
          </p>
          <div>
            <a
              href="/curriculo.pdf"
              target="_blank"
              className="bg-sky-600 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-sky-500 transition-all disabled:opacity-50 cursor-pointer w-max"
            >
              Veja meu Currículo
              <HiNewspaper size={18} />
            </a>
          </div>
          <div className="mt-6 lg:mt-4 flex sm:items-center sm:gap-5 flex-col lg:flex-row">
            <div className="text-5xl text-gray-300 flex items-center h-20 gap-3 ">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}
              `}
                  target="_blank"
                  className="hover:text-sky-500 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={400}
          height={400}
          src="/images/profile-pic.png"
          alt="foto de perfil"
          className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] mb-6 lg:mb-0 rounded-full object-cover border-8 border-sky-500 "
        />
      </div>
    </section>
  );
};

export default HeroSection;
