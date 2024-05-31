import React from "react";
import { AppBar, Box, ButtonGroup, IconButton, Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../../assets/MeVitLogo64.png";
import { Link } from "react-router-dom";

export default function CustomAppBar() {
  return (
    <AppBar color="primary" position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" sx={{ mr: 5 }}>
          <Box>
            <Link to={'/'}>
              <img src={logo}></img>
            </Link>
          </Box>
        </IconButton>

        <ButtonGroup sx={{ flexGrow: 1, gap: 2 }}>
          <Link to="/">
            <Button size="large" variant="text" color="inherit">
              Главная
            </Button>
          </Link>
          <Button size="large" variant="text" disabled color="inherit">
            О нас
          </Button>
          <Button size="large" variant="text" disabled color="inherit">
            Помощь
          </Button>
        </ButtonGroup>

        <Link to={"auth"}>
          <Button
            // href="/auth"
            variant="outlined"
            color="inherit"
            startIcon={<LoginIcon />}
          >
            Вход
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
