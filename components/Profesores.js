import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Profesores = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="proyects"
    >
      <div className="px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-5xl font-medium text-black-600 leading-relaxed text-center"
            >
              Profesores
            </motion.h3>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          {/* <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-4 gap-4 lg:gap-14 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
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
                <img
                  class="rounded-t-lg h-52 min-h-full object-cover"
                  src="/assets/proyecto1.jpg"
                  alt=""
                />
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl text-gray-900">
                      Proyecto ing. civil
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
                <img
                  class="rounded-t-lg h-52 object-cover min-w-full"
                  src="/assets/proyecto2.jpg"
                  alt=""
                />
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl text-gray-900">
                      Proyecto ing. mecatrónica
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
                <img
                  class="rounded-t-lg h-52 min-h-full object-cover"
                  src="/assets/proyecto3.jpg"
                  alt=""
                />
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl text-gray-900">
                      Proyecto ing. en sistemas
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
                <img
                  class="rounded-t-lg h-52 min-w-full object-cover"
                  src="/assets/proyecto4.jpg"
                  alt=""
                />
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl text-gray-900">
                      Proyecto ing. química
                    </h5>
                  </a>
                  <p class="mb-3 text-gray-700">
                    Breve descripción del proyecto
                  </p>
                  <ButtonOutline>Ver más</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profesores;
