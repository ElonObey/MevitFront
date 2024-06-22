import React from "react";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import { Partsizesrv } from "../components/Module/partsizesrv";
import CustomFooter from "../components/footer/CustomFooter";
import Wrapper from "../components/Module/Wrapper";

function PartsizesrvView() {
  return (
    <>
      <CustomAppBar />
        <Partsizesrv />
      <CustomFooter />
    </>
  );
}

export { PartsizesrvView };
