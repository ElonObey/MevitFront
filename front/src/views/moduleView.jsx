import React from "react";
import { Head } from "../components/header";
import { Module } from "../components/Module";
import { Footer } from "../components/footer";

function ModuleView() {
  return (
    <>
      <Head />
      <Module />
      <Footer />
    </>
  );
}

export { ModuleView };
