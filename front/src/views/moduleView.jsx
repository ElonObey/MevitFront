import React from "react";
import { Head } from "../components/header";
import { Module } from "../components/Module";
import { Footer } from "../components/footer";
import CustomAppBar from "../components/AppBar/CustomAppBar";

function ModuleView() {
  return (
    <>
      {/* <Head /> */}
      <CustomAppBar/>
      <Module />
      <Footer />
    </>
  );
}

export { ModuleView };
