import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Spaces from "../components/Spaces";

export default function Home() {
  return (
    <>
      <SeoHead title="Repositorio Ingenierías Ibero" />
      <Layout>
        <Hero />
        <Pricing />
        <Feature />
        <Spaces />
      </Layout>
    </>
  );
}
