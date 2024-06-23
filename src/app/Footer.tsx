import React from "react";
import { FaGithub } from "react-icons/fa";

// Learn testing as well
export const Footer = () => {
  return (
    <footer className="h-20 border-t mt-16">
      <div className="container max-w-screen-lg h-full mx-auto flex flex-col items-center justify-center gap-0.5">
        <a
          href="https://github.com/akarsanth/react-hook-form-zod"
          target="_blank"
          className="p-1.5 hover:bg-pink-200 dark:hover:bg-pink-600  rounded-full"
        >
          <FaGithub className="text-xl" />
        </a>

        <p className="text-xs font-light tracking-wide">
          Made by Aakarshan for Learning.
        </p>
      </div>
    </footer>
  );
};
