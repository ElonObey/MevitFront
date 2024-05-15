import React from "react";
import bigLogo from "../assets/bigLogo.svg";
import "./auth.css";
import { TextField } from "@mui/material";

function AuthView() {
  return (
    <>
      <div className="screen authWrapper">
        <div className="bigLogo">
          <img src={bigLogo} />
        </div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </div>
    </>
  );
}

export default AuthView;
