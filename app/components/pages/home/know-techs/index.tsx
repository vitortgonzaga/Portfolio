import React from "react";
import { SectionTitle } from "../../../section-title";
import TechBadge from "../../../tech-badge";

const KnownTechs = () => {
  return (
    <section id="competencias" className="container py-12 ">
      <SectionTitle
        subtitle="competências"
        title="Conhecimentos e Interesses"
      />
      <div className="mt-10">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
          <span>Frontend</span>
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px] mt-2">
          <TechBadge
            className="text-sky-400 bg-sky-900/80 hover:bg-sky-900/100 "
            name="React"
          />
          <TechBadge
            className="text-sky-400 bg-sky-900/80 hover:bg-sky-900/100 "
            name="Next.js"
          />
          <TechBadge
            className="text-sky-400 bg-sky-900/80 hover:bg-sky-900/100 "
            name="Tailwind CSS"
          />
          <TechBadge
            className="text-sky-400 bg-sky-900/80 hover:bg-sky-900/100 "
            name="Typescript"
          />
          <TechBadge
            className="text-sky-400 bg-sky-900/80 hover:bg-sky-900/100 "
            name="JavaScript"
          />
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
          <span>Backend</span>
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px] mt-2">
          <TechBadge
            className="text-sky-400 bg-sky-900/80 hover:bg-sky-900/100 "
            name="Java"
          />
          <TechBadge
            className="text-sky-400 bg-sky-900/80 hover:bg-sky-900/100 "
            name="Python"
          />
          <TechBadge
            className="text-sky-400 bg-sky-900/80 hover:bg-sky-900/100 "
            name="Node.js"
          />
          <TechBadge
            className="text-sky-400 bg-sky-900/80 hover:bg-sky-900/100 "
            name="MySQL"
          />
          <TechBadge
            className="text-sky-400 bg-sky-900/80 hover:bg-sky-900/100 "
            name="MongoDB"
          />
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
          <span>Tests</span>
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px] mt-2">
          <TechBadge
            className="text-sky-400 bg-sky-900/80 hover:bg-sky-900/100 "
            name="Postman"
          />
          <TechBadge
            className="text-sky-400 bg-sky-900/80 hover:bg-sky-900/100 "
            name="Cypress"
          />
        </div>
        <div className="mt-5">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
            <span>DevOps & Cloud</span>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px] mt-2">
            <TechBadge
              className="text-sky-400 bg-sky-900/80 hover:bg-sky-900/100 "
              name="Git"
            />
            <TechBadge
              className="text-sky-400 bg-sky-900/80 hover:bg-sky-900/100 "
              name="Terraform"
            />
            <TechBadge
              className="text-sky-400 bg-sky-900/80 hover:bg-sky-900/100 "
              name="AWS"
            />
            <TechBadge
              className="text-sky-400 bg-sky-900/80 hover:bg-sky-900/100"
              name="Docker"
            />
            <TechBadge
              className="text-sky-400 bg-sky-900/80 hover:bg-sky-900/100"
              name="Github Actions"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnownTechs;
