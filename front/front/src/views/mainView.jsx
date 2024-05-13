import React from "react";
import { Head } from "../components/header";
import { Tiles } from "../components/tiles";
import { Footer } from "../components/footer";

function MainView() {
  return (
    <>
      <Head />
      <Tiles />
      <Footer/>
    </>
  );
}

export { MainView };
