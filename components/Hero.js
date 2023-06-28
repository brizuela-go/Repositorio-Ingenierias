import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { BsLightbulbFill, BsBookHalf } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const Hero = ({
  listUser = [
    {
      name: "Futuros ingenieros",
      number: "100",
      icon: <FaUser className="text-orange-500" />,
    },
    {
      name: "Proyectos",
      number: "154",
      icon: <BsLightbulbFill className="text-orange-500" />,
    },
    {
      name: "Cursos",
      number: "12",
      icon: <BsBookHalf className="text-orange-500" />,
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-center bg-cover bg-fixed filter"
      style={{ backgroundImage: "url('/assets/hero1.jpg')" }}
      id="about"
    >
      <div className="mt-24 px-8 xl:px-16">
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 md:py-28 lg:py-40"
            variants={scrollAnimation}
          >
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-6xl font-medium text-gray-100 mb-6 leading-normal tracking-wide">
                DEPARTAMENTO DE
                <p className="text-white-300 tracking-wide">
                  CIENCIAS E INGENIERÍAS
                </p>
              </h1>

              <ButtonPrimary>Conoce más</ButtonPrimary>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                {/* <Image
                src="/assets/hero1.jpg"
                alt="img"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              /> */}
              </motion.div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <div className="max-w-screen-xl mx-auto relative w-full flex pb-6">
          <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
            {listUser.map((listUsers, index) => (
              <motion.div
                className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                key={index}
                custom={{ duration: 2 + index }}
                variants={scrollAnimation}
              >
                <div className="flex mx-auto w-40 sm:w-auto">
                  <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                    {listUsers.icon}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl text-black-600 font-bold">
                      {listUsers.number}+
                    </p>
                    <p className="text-lg text-black-500">{listUsers.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ScrollAnimationWrapper>
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
