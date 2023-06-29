"use client";

import Link from "next/link";
import { useState } from "react";

import Logo from "../assets/loguinho.png";
import Nav from "../assets/cardapio.png";
import Instagram from "../assets/instagram.png";
import Whatsapp from "../assets/whatsapp.png";
import User from "../assets/do-utilizador.png";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header
      className={
        openMenu
          ? "bg-darkBlue-50 h-72 transition-all md:flex md:items-center md:h-36"
          : "bg-darkBlue-50 h-36 transition-all md:flex md:items-center"
      }
    >
      <div className="flex justify-center">
        <img src={Logo.src} alt="Wheller Interiores" className="h-40 w-auto" />
        <button
          className="text-white h-40 w-4 md:hidden"
          onClick={handleOpenMenu}
        >
          <img src={Nav.src} className="h-6" />
        </button>
      </div>
      <nav
        className={
          openMenu
            ? "bg-darkBlue-50 flex flex-col text-white justify-center items-center md:hidden"
            : "hidden"
        }
      >
        <Link href={"/"} className="mb-1">
          HOME
        </Link>
        <Link href={"/projects"} className="mb-1">
          PROJETOS
        </Link>
        <Link href={"/about"} className="mb-1">
          SOBRE NÓS
        </Link>
        <div className="flex items-center mt-2">
          <Link href={"/"}>
            <img src={Instagram.src} alt="Instagram" className="h-6 w-6" />
          </Link>
          <Link href={"/"}>
            <img
              src={Whatsapp.src}
              alt="Whatsapp"
              className="h-6 w-6 ml-3 mr-3"
            />
          </Link>
          <Link href={"/"}>
            <img src={User.src} alt="Login" className="h-6 w-6" />
          </Link>
        </div>
      </nav>

      <nav className="bg-darkBlue-50 text-white hidden transition-all md:flex md:w-full md:justify-center md:relative">
        <div className="mr-64">
          <Link href={"/"}>HOME</Link>
          <Link href={"/projects"} className="mx-8">
            PROJETOS
          </Link>
          <Link href={"/about"}>SOBRE NÓS</Link>
        </div>

        <div className="flex items-center justify-center right-16 absolute">
          <Link href={"/"}>
            <img src={User.src} alt="Login" className="h-6 w-6" />
          </Link>
          <Link href={"/"}>
            <img src={Whatsapp.src} alt="Whatsapp" className="h-6 w-6 mx-4" />
          </Link>
          <Link href={"/"}>
            <img src={Instagram.src} alt="Instagram" className="h-6 w-6" />
          </Link>
        </div>
      </nav>
    </header>
  );
}