import React from "react";
import { Head } from "../components/header";
import { NotFound } from "../components/NotFound";
import { Footer } from "../components/footer";

function NotFoundView() {
  return (
    <>
      <Head />
      <NotFound />
      <Footer />
    </>
  );
}

export { NotFoundView };
