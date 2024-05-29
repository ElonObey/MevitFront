import React from "react";
import { Head } from "../components/header";
import { Tiles } from "../components/tiles";
import { Footer } from "../components/footer";

import {
  AppBar,
  Box,
  ButtonGroup,
  IconButton,
  Toolbar,
} from "@mui/material";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

import logo from "../assets/MeVitLogo64.svg";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import CustomTiles from "../components/CustomTiles/CustomTiles";
import CustomFooter from "../components/footer/CustomFooter";

function MainView() {
  return (
    <>
      <CustomAppBar/>
      <CustomTiles/>
      <CustomFooter/>

      {/* <Footer /> */}
    </>
  );
}

export { MainView };
