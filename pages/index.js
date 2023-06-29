import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Spaces from "../components/Spaces";
import Profesores from "../components/Profesores";

export default function Home() {
  return (
    <>
      <SeoHead title="Repositorio Ingenierías Ibero" />
      <Layout imgSrc={"assets/Logo.svg"}>
        <Hero />
        <Pricing />
        <Profesores />
        <Spaces />
        {/* <Feature /> */}
      </Layout>
    </>
  );
}
