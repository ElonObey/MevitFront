import React from "react";

import CustomAppBar from "../components/AppBar/CustomAppBar";
import CustomTiles from "../components/CustomTiles/CustomTiles";
import CustomFooter from "../components/footer/CustomFooter";

function MainView() {
  return (
    <>
      <CustomAppBar/>
      <CustomTiles/>
      <CustomFooter/>
    </>
  );
}

export { MainView };
