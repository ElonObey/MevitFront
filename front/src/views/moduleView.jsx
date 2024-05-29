import React from "react";
import { Head } from "../components/header";
import { Module } from "../components/Module";
import { Footer } from "../components/footer";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import CustomFooter from "../components/footer/CustomFooter";

function ModuleView() {
  return (
    <>
      <CustomAppBar/>
      <Module />
      <CustomFooter/>
      {/* <Footer /> */}
    </>
  );
}

export { ModuleView };
