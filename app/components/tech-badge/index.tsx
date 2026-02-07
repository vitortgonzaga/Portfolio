import React from "react";
import { cn } from "../../lib/utils";

type TechBadgeProps = {
  name: string;
  className?: string;
};

const TechBadge = ({ name, className }: TechBadgeProps) => {
  return (
    <div
      className={cn(
        "text-sky-400 bg-sky-900/80 text-sm py-1 px-3 rounded-lg",
        className
      )}
    >
      {name}
    </div>
  );
};

export default TechBadge;
