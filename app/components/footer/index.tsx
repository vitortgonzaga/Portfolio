import React from "react";

const Footer = () => {
  return (
    <footer className="h-14 w-full flex justify-between items-center px-4 py-2 bg-zinc-800">
      <span className="text-sm text-gray-400">
        Desenvolvido com Next.js e Tailwind CSS.
      </span>
      <span>
        Made By <strong className="text-sky-500">Vitor Torres</strong>
      </span>
    </footer>
  );
};

export default Footer;
