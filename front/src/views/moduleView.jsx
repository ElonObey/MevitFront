import React from "react";
import { Module } from "../components/Module";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import CustomFooter from "../components/footer/CustomFooter";

function ModuleView() {
  return (
    <>
      <CustomAppBar/>
      <Module />
      <CustomFooter/>
    </>
  );
}

export { ModuleView };
