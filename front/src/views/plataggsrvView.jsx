import React from "react";
import { Plataggsrv } from "../components/Module/plataggsrv";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import CustomFooter from "../components/footer/CustomFooter";
import Wrapper from "../components/Module/Wrapper";

function PlataggsrvView() {
  return (
    <>
      <CustomAppBar />
      <Wrapper>
        <Plataggsrv />
      </Wrapper>

      <CustomFooter />
    </>
  );
}

export { PlataggsrvView };
