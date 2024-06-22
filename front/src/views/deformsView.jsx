import React from "react";
import { Deformsrv } from "../components/Module/deformsrv";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import CustomFooter from "../components/footer/CustomFooter";


function DeformsView() {
  return (
    <>
      <CustomAppBar />
        <Deformsrv />
      <CustomFooter />
    </>
  );
}

export default DeformsView;
