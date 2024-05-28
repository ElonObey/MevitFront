import React from "react";
import { Head } from "../components/header";
import { Footer } from "../components/footer";
import { Plataggsrv } from "../components/Module/plataggsrv";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import { Partsizesrv } from "../components/Module/partsizesrv";

function PartsizesrvView() {
  return (
    <>
      {/* <Head /> */}
      <CustomAppBar/>
      <Partsizesrv/>
      <Footer />
    </>
  );
}

export { PartsizesrvView };
