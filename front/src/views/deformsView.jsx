import React from "react";
import { Head } from "../components/header";
import { Deformsrv } from "../components/Module/deformsrv";
import { Footer } from "../components/footer";
import CustomAppBar from "../components/AppBar/CustomAppBar";

function DeformsView() {
  return (
    <>
      {/* <Head /> */}
      <CustomAppBar/>
      <Deformsrv />
      <Footer />
    </>
  );
}

export default DeformsView;
