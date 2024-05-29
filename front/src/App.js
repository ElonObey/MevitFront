import { Stack, ThemeProvider } from "@mui/material";
import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import { baseTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Stack width={'100%'} height={'100%'} justifyContent={'space-between'}>
        <AppRoutes />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
