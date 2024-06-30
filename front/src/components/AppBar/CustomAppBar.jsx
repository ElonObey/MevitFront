import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  ButtonGroup,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../routes/useAuth";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function CustomAppBar() {
  const [anchorElNav, setAnchorElNav] = useState();
  const [anchorElUser, setAnchorElUser] = useState();
  const theme = useTheme();
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
    route === "/auth"
      ? signout(() => navigate(route, { replace: true }))
      : navigate(route, { replace: true });
  };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const ListMenuConfig = [
    {
      text: "Главная",
      path: "/",
      disabled: false,
    },
    {
      text: "О нас",
      path: "",
      disabled: true,
    },
    {
      text: "Помощь",
      path: "",
      disabled: true,
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {ListMenuConfig.map(({ text, path, disabled, index }) => (
          <ListItem key={text} sx={{ textDecoration: "none" }} disablePadding>
            <Link
              style={{ textDecoration: "inherit", color: "black" }}
              to={path}
            >
              <ListItemButton disabled={disabled}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar color="white" position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          sx={{ [theme.breakpoints.up("sm")]: { display: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <IconButton size="large" edge="start">
          <Box>
            <Link to={"/"}>
              <img src={logo}></img>
            </Link>
          </Box>
        </IconButton>

        <ButtonGroup
          sx={{
            flexGrow: 1,
            gap: 2,
            ml: 5,
            [theme.breakpoints.down("sm")]: { display: "none" },
          }}
        >
          {ListMenuConfig.map(({ text, path, disabled, index }) => (
            <Link to={path}>
              <Button
                size="large"
                variant="text"
                color="inherit"
                disabled={disabled}
              >
                {text}
              </Button>
            </Link>
          ))}
        </ButtonGroup>

        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>

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
      </Toolbar>
    </AppBar>
  );
}
