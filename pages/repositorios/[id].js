import React from "react";
import Layout from "../../components/Layout/Layout";
import { db } from "../../firebase/firebaseClient";
import { doc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import Head from "next/head";

export async function getServerSideProps(context) {
  const id = context.query.id;

  const docRef = doc(db, "projects", id);

  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const repoData = docSnap?.data();
  const serializedRepoData = JSON.stringify(repoData);

  return {
    props: {
      serializedRepoData,
    },
  };
}

const Repositorio = ({ serializedRepoData }) => {
  const repoData = JSON.parse(serializedRepoData);
  return (
    <Layout imgSrc={"../assets/Logo.svg"}>
      <Head>
        <title>{repoData.name}</title>
        <meta name="description" content={repoData.abstract} />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <div className="md:m-36 m-14 my-36 ">
        <h1 className="text-left text-5xl font-medium">Proyecto Destacado</h1>
        <p className="mt-10 text-lg">{repoData.name}</p>
        <div className="my-24 flex flex-col md:flex-row md:justify-between gap-8">
          <div className="space-y-10">
            <h3 className="text-5xl font-medium">Artículo</h3>
            <iframe
              src={repoData.article}
              className="w-full h-96 border-black-600 border-8"
            ></iframe>
          </div>
          <div className="space-y-10">
            <h3 className="text-5xl font-medium text-black-600 ">Video</h3>
            <iframe
              src={repoData.video}
              className="w-full h-96 border-black-600 border-8"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Repositorio;
