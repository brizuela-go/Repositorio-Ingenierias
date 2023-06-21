import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="proyects"
    >
      <div className="  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Proyectos destacados
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Alto nivel de proyectos realizados por los alumnos
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-4 gap-4 lg:gap-14 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper>
              <motion.div
                variants={scrollAnimation}
                className="border-2 border-gray-500 rounded-xl"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <img class="rounded-t-lg" src="/assets/hero1.jpg" alt="" />
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl text-gray-900">
                      Nombre del proyecto
                    </h5>
                  </a>
                  <p class="mb-3 text-gray-700">
                    Breve descripción del proyecto
                  </p>
                  <ButtonOutline>Ver más</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.div
                variants={scrollAnimation}
                className="border-2 border-gray-500 rounded-xl"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <img class="rounded-t-lg" src="/assets/hero1.jpg" alt="" />
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl text-gray-900">
                      Nombre del proyecto
                    </h5>
                  </a>
                  <p class="mb-3 text-gray-700">
                    Breve descripción del proyecto
                  </p>
                  <ButtonOutline>Ver más</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.div
                variants={scrollAnimation}
                className="border-2 border-gray-500 rounded-xl"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <img class="rounded-t-lg" src="/assets/hero1.jpg" alt="" />
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl text-gray-900">
                      Nombre del proyecto
                    </h5>
                  </a>
                  <p class="mb-3 text-gray-700">
                    Breve descripción del proyecto
                  </p>
                  <ButtonOutline>Ver más</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.div
                variants={scrollAnimation}
                className="border-2 border-gray-500 rounded-xl"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <img class="rounded-t-lg" src="/assets/hero1.jpg" alt="" />
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl text-gray-900">
                      Nombre del proyecto
                    </h5>
                  </a>
                  <p class="mb-3 text-gray-700">
                    Breve descripción del proyecto
                  </p>
                  <ButtonOutline>Ver más</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
