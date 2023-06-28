import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, imgSrc }) => {
  return (
    <>
      <Header imgSrc={imgSrc} />
      <main>{children}</main>
      <Footer imgSrc={imgSrc} />
    </>
  );
};

export default Layout;
