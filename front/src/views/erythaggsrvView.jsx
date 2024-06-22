import React from "react";

import { Erythaggsrv } from "../components/Module/erythaggsrv";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import CustomFooter from "../components/footer/CustomFooter";
import Wrapper from "../components/Module/Wrapper";

function ErythaggsrvView() {
  return (
    <>
      <CustomAppBar />
      <Wrapper>
        <Erythaggsrv />
      </Wrapper>

      <CustomFooter />
    </>
  );
}

export default ErythaggsrvView;
