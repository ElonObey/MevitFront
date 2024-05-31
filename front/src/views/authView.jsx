import * as React from "react";
import bigLogo from "../assets/Logo.png";
import "./auth.css";
import { Box, Link, Stack, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import PasswordField from "../components/UI/TextFields/PasswordField";

//
// TODO: декомпозировать
//
export default function AuthView() {
  return (
    <Stack
      height={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box width={"30%"} height={"40%"} display={"flex"} alignItems={"center"}>
        <img src={bigLogo} />
      </Box>
      <Stack sx={{ width: "350px", gap: 1, alignItems: "end" }}>
        <Stack gap={1} width="100%">
          <Typography>Логин</Typography>
          <TextField id="outlined-basic" variant="outlined" />

          <Typography>Пароль</Typography>
          <PasswordField />
        </Stack>

        <Typography>Забыли пароль?</Typography>

        {/* Link for dev */}
        <Button
          href="/"
          sx={{ width: "100%" }}
          variant="contained"
          size="large"
        >
          Войти
        </Button>
      </Stack>
      <Stack alignItems="center" my={5}>
        <Typography>Нет аккаунта?</Typography>
        <Link
          sx={{
            color: "black",
            fontSize: "16px",
            fontWeight: 500,
            textDecoretionLine: "underline",
            lineHeight: "25px",
          }}
          href="/register"
        >
          Зарегестрируйтесь прямо сейчас
        </Link>
      </Stack>
    </Stack>
  );
}
