import React from "react";
import Layout from "../../components/Layout/Layout";
import { db } from "../../firebase/firebaseClient";
import Head from "next/head";
import Image from "next/image";
import { collection, query, where, getDocs } from "firebase/firestore";
import ButtonPrimary from "../../components/misc/ButtonPrimary";
import Profesores from "../../components/Profesores";

export async function getServerSideProps(context) {
  const id = context.query.id;

  const cores = [
    {
      id: "MEMBSA",
      name: "MEMBSA (Mecatrónica, Electrónica, Mecánica, Biomédica, Sistemas y Automotriz)",
      illustration: "/../assets/membsa.svg",
      href: "/nucleos/MEMBSA",
    },
    {
      id: "LIN",
      name: "LIN (Logística, Industrial y Negocios)",
      illustration: "/../assets/lin.svg",
      href: "/nucleos/LIN",
    },
    {
      id: "QB",
      name: "QB (Química y Biotecnología)",
      illustration: "/../assets/qb.svg",
      href: "/nucleos/QB",
    },
    {
      id: "CIVIL",
      name: "Civil",
      illustration: "/../assets/civil.svg",
      href: "/nucleos/CIVIL",
    },
  ];

  if (!cores.find((core) => core.id === id)) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const projects = [];

  const q = query(collection(db, "projects"), where("core", "==", id));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const project = doc.data();
    projects.push(project);
  });

  const serializedRepoData = JSON.stringify(projects);

  return {
    props: {
      corename: cores.find((core) => core.id === id).name,
      coreillustration: cores.find((core) => core.id === id).illustration,
      serializedRepoData,
    },
  };
}

const Repositorio = ({ corename, coreillustration, serializedRepoData }) => {
  const repoData = JSON.parse(serializedRepoData);

  return (
    <Layout imgSrc={"../assets/Logo.svg"}>
      <Head>
        <title>{corename}</title>
        <meta name="description" content={corename} />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <div className="md:m-36 m-14 my-36 ">
        <div className="flex justify-between">
          <div className="flex flex-col my-20">
            <h1 className="text-left text-5xl font-medium leading-snug">
              {corename}
            </h1>
            <h2 className="mt-10 text-left text-5xl font-medium text-orange-500">
              Nucleo Académico
            </h2>
          </div>
          <img src={coreillustration} height={100} width={500} />
        </div>
        <div className="my-36">
          <h3 className="text-5xl font-medium">Proyectos Destacados</h3>
          <div className="grid grid-cols-1 gap-24 my-20">
            {repoData.map((project, index) => (
              <div
                key={index}
                className="flex lg:flex-row flex-col justify-between space-x-20 p-10 bg-white rounded-lg shadow-lg bg-[#F8F8F8] "
              >
                <div className="flex flex-col">
                  <h4 className="text-3xl font-medium ">{project.name}</h4>
                  <p className="mt-4 text-lg text-justify">
                    {project.abstract}
                  </p>
                  <div className="mt-5">
                    {project?.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-1 mt-4 mr-2 text-sm font-semibold text-white-300 bg-orange-500 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-row space-x-8 justify-between mt-5">
                    <a
                      href={project.article}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ButtonPrimary>Artículo</ButtonPrimary>
                    </a>
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ButtonPrimary>Video</ButtonPrimary>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Profesores />
      </div>
    </Layout>
  );
};

export default Repositorio;
