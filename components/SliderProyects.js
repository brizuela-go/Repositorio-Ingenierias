import React, { useEffect, useState } from "react";

// import react slick
import Slider from "react-slick";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";
import ButtonPrimary from "./misc/ButtonPrimary";

import { db } from "../firebase/firebaseClient";
import { collection, doc, getDocs } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { get } from "jquery";

const SliderProyects = ({}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const projects = [];
    const querySnapshot = await getDocs(collection(db, "projects"));
    querySnapshot.forEach((doc) => {
      let project = doc.data();
      project.id = doc.id;
      projects.push(project);
    });
    setProjects(projects);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {projects.map((project, index) => (
          <div className="px-3 flex items-stretch " key={index}>
            <div className="hover:border-orange-500 transition-all rounded-lg px-3 py-8 flex flex-col bg-gray-100 h-96 relative">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600">{project.name}</p>
                  </div>
                </div>
              </div>
              <div className="min-w-full absolute bottom-10">
                <a href={`repositorios/${project.id}`}>
                  <ButtonPrimary>Ver más</ButtonPrimary>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-center mt-24 md:justify-end md:mt-0">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderProyects;
