import React from "react";
import { Head } from "../components/header";
import { Footer } from "../components/footer";
import { Plataggsrv } from "../components/Module/plataggsrv";
import CustomAppBar from "../components/AppBar/CustomAppBar";

function PlataggsrvView() {
  return (
    <>
      {/* <Head /> */}
      <CustomAppBar/>
      <Plataggsrv />
      <Footer />
    </>
  );
}

export { PlataggsrvView };
