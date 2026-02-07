import { ReactNode } from "react";
import { getRelativeTimeString } from "../../../../utils/get-relative-time";

type KnownTechProps = {
  tech: {
    icon: ReactNode;
    name: string;
    startDate: string;
  };
};

const KnownTech = ({ tech }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    "pt-br"
  )?.replace("há ", " ");

  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-sky-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        {tech.icon}
      </div>
      <span>{relativeTime} de experiência</span>
    </div>
  );
};

export default KnownTech;
