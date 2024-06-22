import React from "react";
import { Deformsrv } from "../components/Module/deformsrv";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import CustomFooter from "../components/footer/CustomFooter";
import { Box } from "@mui/material";
import Wrapper from "../components/Module/Wrapper";

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
