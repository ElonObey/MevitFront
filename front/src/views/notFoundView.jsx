import React from "react";
import { Head } from "../components/header";
import { NotFound } from "../components/NotFound";
import { Footer } from "../components/footer";
import CustomFooter from "../components/footer/CustomFooter";

function NotFoundView() {
  return (
    <>
      <Head />
      <NotFound />
      <CustomFooter/>
      {/* <Footer /> */}
    </>
  );
}

export { NotFoundView };
