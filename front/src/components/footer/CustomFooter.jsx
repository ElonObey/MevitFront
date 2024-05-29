import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/MeVitLogo64.svg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

export default function CustomFooter() {
  return (
    <Paper
      sx={{
        backgroundColor: "rgba(104, 188, 224, 0.10)",
        display: "flex",
        justifyContent: "space-between",
        px: 10,
        py: 3,
      }}
    >
      <IconButton disableRipple size="large">
        <Box>
          <img src={logo} />
        </Box>
      </IconButton>
      <Stack justifyContent={"space-around"}>
        <ContactElement
          text={"г. Н. Новгород, ул. Минина, 24"}
          icons={<LocationOnOutlinedIcon fontSize="medium" />}
        />
        <ContactElement
          text={"+7 (831) 436 63 07"}
          icons={<LocalPhoneOutlinedIcon fontSize="medium" />}
        />
        <ContactElement
          text={"nntu@nntu.ru"}
          icons={<MailOutlinedIcon fontSize="medium" />}
        />
      </Stack>
    </Paper>
  );
}
function ContactElement({ text, icons }) {
  return (
    <Box display={"flex"} alignItems={"center"} gap={1}>
      {icons}
      <Typography variant="subtitle">{text}</Typography>
    </Box>
  );
}
