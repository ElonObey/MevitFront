import * as React from "react";
import bigLogo from "../assets/Logo.png";
import "./auth.css";
import { Alert, Box, Link, Stack, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import PasswordField from "../components/UI/TextFields/PasswordField";

//
// TODO: декомпозировать
//
function RegisterView() {
  const [alertStatus, setAlertStatus] = React.useState(true)
  return (
    <Stack
      height={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box
        width={"30%"}
        height={"40%"}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <img src={bigLogo} />
      </Box>
      <Stack sx={{ width: "350px", gap: 5, alignItems: "end" }}>
        <Stack gap={1} width="100%">
          <Alert severity="info" sx={{display: alertStatus&&'none'}}>Данные отправлены</Alert>
          <Typography>Логин</Typography>
          <TextField id="login" variant="outlined" />

          <Typography>E-mail</Typography>
          <TextField id="Email" variant="outlined" />

          <Typography>Пароль</Typography>
          <PasswordField />
        </Stack>

        <Button sx={{ width: "100%" }} variant="contained" onClick={() => setAlertStatus(false)} size="large">
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
