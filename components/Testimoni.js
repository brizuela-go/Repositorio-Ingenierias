import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Ana Moreno Hernandez ",
      image: "/assets/rafa.jpg",
      city: "Académico de Tiempo",
      country: "SC",
      rating: "5",
      testimoni: "Lorem ipsum dolor sit amet consectetur adipisicing. ",
      email: "ana@iberopuebla.mx",
    },
    {
      name: "Huber Giron ",
      image: "/assets/rafa.jpg",
      city: "Académico de Tiempo",
      country: "SC",
      rating: "5",
      testimoni: "Lorem ipsum dolor sit amet consectetur adipisicing. ",
      email: "huber@iberopuebla.mx",
    },
    {
      name: "Oliver Ochoa",
      image: "/assets/oliver.jpg",
      city: "Académico de Tiempo",
      country: "M",
      rating: "5",
      testimoni: "Lorem ipsum dolor sit amet consectetur adipisicing. ",
      email: "oliver@iberopuebla.mx",
    },
    {
      name: "Rafael Pérez ",
      image: "/assets/rafa.jpg",
      city: "Académico de Tiempo",
      country: "SC",
      rating: "5",
      testimoni: "Lorem ipsum dolor sit amet consectetur adipisicing. ",
      email: "rafael@iberopuebla.mx",
    },
    {
      name: "Adrían Maldonado",
      image: "/assets/adrian.jpg",
      city: "Ingeniero",
      country: "Automotriz",
      rating: "5",
      testimoni: "Lorem ipsum dolor sit amet consectetur adipisicing. ",
      email: "adrian@iberopuebla.mx",
    },
    {
      name: "Antonio Benítez",
      image: "/assets/benitez.jpg",
      city: "PhD",
      country: "SC",
      rating: "5",
      testimoni: "Lorem ipsum dolor sit amet consectetur adipisicing. ",
      email: "antonio@iberopuebla.mx",
    },
  ],
}) => {
  return (
    <>
      <div className="grid gap-y-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {listTestimoni.map((listTestimonis, index) => (
          <div className="col-span-1" key={index}>
            <div className="text-center ">
              <img
                src={listTestimonis.image}
                height={120}
                width={120}
                className="rounded-full border-2 border-orange-500 mx-auto mb-2"
                alt="Icon People"
              />
              <div className="font-medium">{listTestimonis.name}</div>
              <span>{listTestimonis.testimoni}</span>
              <a href={`mailto:${listTestimonis.email}`}>
                <p className="text-orange-500 mt-3">{listTestimonis.email}</p>
              </a>
            </div>
          </div>
          // <div className="px-3 flex items-stretch" key={index}>
          //   <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
          //     <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
          //       <div className="flex order-2 xl:order-1">
          //         <Image
          //           src={listTestimonis.image}
          //           height={50}
          //           width={50}
          //           className="rounded-full"
          //           alt="Icon People"
          //         />
          //         <div className="flex flex-col ml-5 text-left">
          //           <p className="text-lg text-black-600 capitalize">
          //             {listTestimonis.name}
          //           </p>
          //           <p className="text-sm text-black-500 capitalize">
          //             {listTestimonis.city}, {listTestimonis.country}
          //           </p>
          //         </div>
          //       </div>
          //       <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
          //         <p className="text-sm">{listTestimonis.rating}</p>
          //         <span className="flex ml-4">
          //           <Stars className="h-4 w-4" />
          //         </span>
          //       </div>
          //     </div>
          //     <p className="mt-5 text-justify">{listTestimonis.testimoni}</p>
          //   </div>
          // </div>
        ))}
      </div>
    </>
  );
};

export default Testimoni;
