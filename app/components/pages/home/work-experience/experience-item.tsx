import Image from "next/image";
import React from "react";
import TechBadge from "../../../tech-badge";

const ExperienceItem = () => {
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
              @ Multittech
            </a>
            <h4 className="text-gray-300">
              Estagiário em desenvolvimento Back-end
            </h4>
            <span className="text-gray-500">
              mar 2025 • O momento • ( 4 meses ){" "}
            </span>
            <p className="text-gray-400 max-w-[600px]">
              Durante meu estágio, atuei auxiliando no desenvolvimento de
              diversos projetos usando Google Scripts. Participei ativamente do
              desenvolvimento de uma solução IoT para o setor agroindustrial,
              implementada em um Raspberry Pi, que mede em tempo real o peso e o
              rendimento da colheita, com scripts, além de uma plataforma web
              para monitoramento da produção em tempo real, otimizando a tomada
              de decisão no setor agroindustrial.
            </p>
          </div>
          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
            Competências
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
              @ E-Health Innovation Center
            </a>
            <h4 className="text-gray-300">
              Pesquisador em iniciação cíentifica
            </h4>
            <span className="text-gray-500">
              Nov 2023 • Fev 2025 • ( 1 ano e 3 meses )
            </span>
            <p className="text-gray-400 max-w-[600px]">
              Durante meu período na iniciação cíentifica, atuei no
              desenvolvimento do Sistema IoT ELA, um projeto focado em
              comunicação e automação residencial acessível para pessoas com
              ELA. A interface utiliza Eye Tracking para facilitar a interação
              sem a necessidade de movimentos manuais.
            </p>
          </div>
          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
            Competências
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
