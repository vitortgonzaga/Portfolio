import NextLink from "next/link";
import { cn } from "../../lib/utils";
import { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof NextLink>;

const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(
        "flex items-center gap-2 text-gray-300 text-sm hover:text-sky-500 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
