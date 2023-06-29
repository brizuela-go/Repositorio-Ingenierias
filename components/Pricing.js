import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const cores = [
  {
    id: "MEMBSA",
    name: "Mecatrónica, Electrónica, Mecánica, Biomédica, Sistemas y Automotriz",
    illustration: "/assets/membsa.svg",
    href: "/nucleos/MEMBSA",
  },
  {
    id: "LIN",
    name: "Logística, Industrial y Negocios",
    illustration: "/assets/lin.svg",
    href: "/nucleos/LIN",
  },
  {
    id: "QB",
    name: "Química y Biotecnología",
    illustration: "/assets/qb.svg",
    href: "/nucleos/QB",
  },
  {
    id: "Civil",
    name: "Civil",
    illustration: "/assets/civil.svg",
    href: "/nucleos/CIVIL",
  },
];

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="proyects"
    >
      <div className="px-6 sm:px-8 lg:px-16 mt-10 mx-auto flex flex-col w-full justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-5xl font-medium text-black-600 leading-relaxed text-center mb-8"
            >
              Núcleos Académicos
            </motion.h3>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-4 gap-4 lg:gap-14 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            {cores.map((core, index) => (
              <ScrollAnimationWrapper>
                <motion.div
                  key={index}
                  variants={scrollAnimation}
                  className="border-2 border-gray-500 rounded-xl "
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <img
                    class="rounded-t-lg h-52 min-h-full object-cover"
                    src={core.illustration}
                    alt={core.id}
                  />
                  <div class="p-5 h-52 flex flex-col justify-between items-stretch ">
                    <a href={core.href}>
                      <h5 class="mb-2 text-2xl text-gray-900 text-center hover:underline transition duration-150 ease-in-out ">
                        {core.id}
                      </h5>
                    </a>
                    <p class="mb-3 text-gray-700 text-center">{core.name}</p>
                    <div className="text-center ">
                      <a href={core.href}>
                        <ButtonOutline>Ver más</ButtonOutline>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
