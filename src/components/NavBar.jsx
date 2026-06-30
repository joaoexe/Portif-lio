import React from "react";
import logo from "../assets/logos.png";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-10 w-20" src={logo} alt="Logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-6 text-4xl">
        <a
          href="https://github.com/joaoexe"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:scale-110"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;