import React from "react";
import {
  AppBar,
  Box,
  ButtonGroup,
  IconButton,
  Toolbar,
  useTheme,
} from "@mui/material";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../../assets/MeVitLogo64.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../routes/useAuth";

export default function CustomAppBar() {
  const navigate = useNavigate();
  const { user, signout } = useAuth();
  return (
    <AppBar color="white" position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" sx={{ mr: 5 }}>
          <Box>
            <Link to={"/"}>
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

        <Box>
          {user ? (
            <>
            {user}
              <Button
                onClick={() =>
                  signout(() => navigate("auth", { replace: true }))
                }
                variant="outlined"
                color="inherit"
                startIcon={<LoginIcon />}
              >
                Выйти
              </Button>
            </>
          ) : (
            <Button
              onClick={() => navigate("auth", { replace: true })}
              variant="outlined"
              color="inherit"
              startIcon={<LoginIcon />}
            >
              Войти
            </Button>
          )}
        </Box>
        {/* <Link to={"auth"}>
          <Button
            // href="/auth"
            variant="outlined"
            color="inherit"
            startIcon={<LoginIcon />}
          >
            Вход
          </Button>
        </Link> */}
      </Toolbar>
    </AppBar>
  );
}
