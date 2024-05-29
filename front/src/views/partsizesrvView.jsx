import React from "react";
import { Head } from "../components/header";
import { Footer } from "../components/footer";
import { Plataggsrv } from "../components/Module/plataggsrv";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import { Partsizesrv } from "../components/Module/partsizesrv";
import CustomFooter from "../components/footer/CustomFooter";

function PartsizesrvView() {
  return (
    <>
      <CustomAppBar/>
      <Partsizesrv/>
      <CustomFooter/>
      {/* <Footer /> */}
    </>
  );
}

export { PartsizesrvView };
