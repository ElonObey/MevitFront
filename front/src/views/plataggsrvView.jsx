import React from "react";
import { Head } from "../components/header";
import { Footer } from "../components/footer";
import { Plataggsrv } from "../components/Module/plataggsrv";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import CustomFooter from "../components/footer/CustomFooter";

function PlataggsrvView() {
  return (
    <>
      <CustomAppBar/>
      <Plataggsrv />
      <CustomFooter/>
      {/* <Footer /> */}
    </>
  );
}

export { PlataggsrvView };
