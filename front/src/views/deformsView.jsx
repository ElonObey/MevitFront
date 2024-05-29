import React from "react";
import { Head } from "../components/header";
import { Deformsrv } from "../components/Module/deformsrv";
import { Footer } from "../components/footer";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import CustomFooter from "../components/footer/CustomFooter";

function DeformsView() {
  return (
    <>
      <CustomAppBar/>
      <Deformsrv />
      <CustomFooter/>
      {/* <Footer /> */}
    </>
  );
}

export default DeformsView;
