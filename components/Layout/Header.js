import React, { useState, useEffect } from "react";
import Link from "next/link";
import ButtonOutline from "../misc/ButtonOutline.";
import { FaVial, FaGraduationCap } from "react-icons/fa";
import { BsInfoCircle, BsLightbulbFill } from "react-icons/bs";

import { useRouter } from "next/router";

const routes = [
  {
    name: "Inicio",
    path: "/",
    icon: BsInfoCircle,
  },
  {
    name: "Academia",
    path: "/academia",
    icon: FaGraduationCap,
  },
  {
    name: "Laboratorios",
    path: "/labs",
    icon: FaVial,
  },
  {
    name: "Proyectos",
    path: "/proyects",
    icon: BsLightbulbFill,
  },
];

const Header = ({ imgSrc }) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            {/* <Logo className="h-8 w-auto tex"/> */}
            <a href="/">
              <img
                alt="logo"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                className="filter brightness-0 hue-rotate-180"
                src={imgSrc}
              ></img>
            </a>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            {routes.map((route, index) => (
              <a key={index} href={route.path}>
                <p
                  className={
                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                    (router.pathname === route.path
                      ? " text-orange-500 animation-active "
                      : " text-black-500 hover:text-orange-500 a")
                  }
                >
                  {route.name}
                </p>
              </a>
            ))}
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <a href="/">
              <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                  Inicia Sesión
              </a>
            </a>
            <ButtonOutline>Registrate</ButtonOutline>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {routes.map((route, index) => (
              <a key={index} href={route.path}>
                <div
                  className={
                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                    (router.pathname === route.path
                      ? "  border-orange-500 text-orange-500"
                      : " border-transparent")
                  }
                >
                  <route.icon className="w-5 h-5 mb-1" />
                  {route.name}
                </div>
              </a>
            ))}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
