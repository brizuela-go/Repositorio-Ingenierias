import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <img
            alt="logo"
            loading="lazy"
            width="100"
            height="100"
            decoding="async"
            data-nimg="1"
            className="filter brightness-0 hue-rotate-180  mb-6"
            src="assets/Logo.svg"
          ></img>
          <p className="mb-4">
            <strong className="font-medium">
              Blvd. del Niño Poblano No. 2901,
            </strong>{" "}
            Colonia Reserva Territorial Atlixcáyotl, San Andrés Cholula, Pue. C.
            P. 72820.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <a
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md hover:-translate-y-1 hover:shadow-lg transform ease-in-out duration-200"
              href={"https://www.facebook.com/profile.php?id=100057097074319"}
            >
              <BsFacebook className="h-6 w-6 text-[rgba(245,56,56,1)] p-[1.5px]" />
            </a>
            <a
              href={
                "https://twitter.com/IberoPuebla?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              }
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md hover:-translate-y-1 hover:shadow-lg transform ease-in-out duration-200"
            >
              <BsTwitter className="h-6 w-6 text-[rgba(245,56,56,1)] p-[1.5px]" />
            </a>
            <a
              href={"https://www.instagram.com/ingenierias_ibero_puebla/"}
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md hover:-translate-y-1 hover:shadow-lg transform ease-in-out duration-200 "
            >
              <BsInstagram className="h-6 w-6 text-[rgba(245,56,56,1)] p-[1.5px]" />
            </a>
            <a
              href={"https://wa.me/522225794566"}
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md hover:-translate-y-1 hover:shadow-lg transform ease-in-out duration-200 "
            >
              <BsWhatsapp className="h-6 w-6 text-[rgba(245,56,56,1)] p-[1.5px]" />
            </a>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Departamento de Ingenierías de la
            Universidad Iberoamericana Puebla
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-3 sm:col-start-8 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Información</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Conócenos{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Rectoría{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Campus{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              IDIT{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Trabaja con Nosotros{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-3 sm:col-start-10 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Políticas</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacidad{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Términos y Condiciones{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
