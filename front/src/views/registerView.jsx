import * as React from "react";
import bigLogo from "../assets/bigLogo.svg";
import "./auth.css";
import { Box, Link, Stack, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import PasswordField from "../components/UI/TextFields/PasswordField";

//
// TODO: декомпозировать
//
function RegisterView() {
  return (
    <Stack
      height={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box width={"30%"} height={"40%"} display={"flex"} alignItems={"center"}>
        <img src={bigLogo} />
      </Box>
      <Stack sx={{ width: "350px", gap: 5, alignItems: "end" }}>
        <Stack gap={1} width="100%">
          <Typography>Логин</Typography>
          <TextField id="login" variant="outlined" />

          <Typography>E-mail</Typography>
          <TextField id="Email" variant="outlined" />

          <Typography>Пароль</Typography>
          <PasswordField />
        </Stack>

        <Button sx={{ width: "100%" }} variant="contained" size="large">
          Зарегестрироваться
        </Button>
      </Stack>

      <Box display="flex" alignItems="center" gap={1} my={5}>
        <Typography>Уже есть акканут?</Typography>
        <Link
          sx={{
            color: "black",
            fontSize: "16px",
            fontWeight: 500,
            textDecoretionLine: "underline",
            lineHeight: "25px",
          }}
          href="/auth"
        >
          Войдите
        </Link>
      </Box>
    </Stack>
  );
}

export default RegisterView;
