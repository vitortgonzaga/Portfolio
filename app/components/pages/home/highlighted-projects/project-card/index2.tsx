import Image from "next/image";
import React from "react";

import { HiArrowNarrowRight } from "react-icons/hi";
import TechBadge from "../../../../tech-badge";
import Link from "../../../../link";

const ProjectCard2 = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="https://c7fc8402.delivery.rocketcdn.me/wp-content/uploads/2023/12/software.jpg"
          alt="Thumbnail do projeto Portfolio"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <span className="w-3 h-3 bg-sky-400 rounded-full"></span>
          Portfolio
        </h3>

        <p className="text-gray-400 my-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          assumenda consequatur ipsa unde odit. Nulla soluta ad dolor quasi nisi
          asperiores sed ullam earum necessitatibus officia doloremque,
          provident dicta quisquam? Necessitatibus consequuntur sed voluptas
          tenetur quos quaerat dolore, praesentium vel. Dolor natus explicabo,
          dolorem odio esse iusto placeat magni laboriosam.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-[350px]">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>

        <Link href="https://Github.com/Torress01" target="blank">
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard2;
