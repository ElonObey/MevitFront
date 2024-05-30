import React from "react";
import { Plataggsrv } from "../components/Module/plataggsrv";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import CustomFooter from "../components/footer/CustomFooter";

function PlataggsrvView() {
  return (
    <>
      <CustomAppBar/>
      <Plataggsrv />
      <CustomFooter/>
    </>
  );
}

export { PlataggsrvView };
