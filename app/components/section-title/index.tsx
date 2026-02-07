import { cn } from "../../lib/utils";
import { clashDisplay } from "../../utils/fonts";

type SectionTitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export const SectionTitle = ({
  title,
  subtitle,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <span className={`${clashDisplay.className} text-sm text-sky-400`}>{`../${subtitle}`}</span>
      <h3 className={`${clashDisplay.className} text-3xl font-semibold`}>{title}</h3>
    </div>
  );
};
