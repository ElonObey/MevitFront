import React from "react";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import { Partsizesrv } from "../components/Module/partsizesrv";
import CustomFooter from "../components/footer/CustomFooter";

function PartsizesrvView() {
  return (
    <>
      <CustomAppBar/>
      <Partsizesrv/>
      <CustomFooter/>
    </>
  );
}

export { PartsizesrvView };
