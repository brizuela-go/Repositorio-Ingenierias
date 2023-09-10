import "../styles/tailwind.css";
import "../styles/slick.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#e72c54" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
