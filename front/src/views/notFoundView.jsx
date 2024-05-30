import React from "react";
import { NotFound } from "../components/NotFound";
import CustomFooter from "../components/footer/CustomFooter";
import CustomAppBar from "../components/AppBar/CustomAppBar";

function NotFoundView() {
  return (
    <>
      <CustomAppBar />
      <NotFound />
      <CustomFooter />
    </>
  );
}

export { NotFoundView };
