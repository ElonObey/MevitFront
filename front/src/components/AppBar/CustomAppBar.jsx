import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  ButtonGroup,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../../assets/MeVitLogo64.png";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useAuth } from "../../routes/useAuth";

export default function CustomAppBar() {
  const [anchorElNav, setAnchorElNav] = useState();
  const [anchorElUser, setAnchorElUser] = useState();

  const settings = [
    { name: "Profile", route: "/erythaggsrv" },
    { name: "Logout", route: "/auth" },
  ];

  const navigate = useNavigate();
  const { user, signout } = useAuth();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const routeCheck = (route) => {
    route == "/auth"
      ? signout(() => navigate(route, { replace: true }))
      : navigate(route, { replace: true });
  };
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
              <Tooltip>
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar>{user[0]}</Avatar>
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(({ name, route }) => (
                  <MenuItem key={name} onClick={() => routeCheck(route)}>
                    <Typography textAlign="center">{name}</Typography>
                  </MenuItem>
                ))}
              </Menu>

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
